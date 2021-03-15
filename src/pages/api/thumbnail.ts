import { NextApiRequest, NextApiResponse } from 'next'
import { getScreenshot } from './_lib/chromium'
import getThumbnailTemplate from './_lib/thumbnailTemplate'

const isDev = !process.env.AWS_REGION

export default async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<NextApiResponse> => {
  try {
    const level = Number(request.query.level)
    const completedChallenges = Number(request.query.completedChallenges)
    const neededExperience = Number(request.query.neededExperience)

    if (!level) {
      throw new Error('Level is required')
    }

    if (!completedChallenges) {
      throw new Error('completedChallenges is required')
    }

    if (!neededExperience) {
      throw new Error('neededExperience is required')
    }

    const html = getThumbnailTemplate({
      level,
      completedChallenges,
      neededExperience
    })
    const file = await getScreenshot(html, isDev)
    response.statusCode = 200

    response.setHeader('Content-Type', 'image/png')
    response.setHeader(
      'Cache-Control',
      'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
    )
    response.end(file)
  } catch (error) {
    response.statusCode = 500
    response.setHeader('Content-Type', 'text/html')
    response.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>')

    return response
  }
}
