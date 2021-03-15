type ThumbnailProps = {
  level: number
  completedChallenges: number
  neededExperience: number
}

export default function getThumbnailTemplate({
  level,
  completedChallenges,
  neededExperience
}: ThumbnailProps) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
      rel="stylesheet"
    />

    <style>
      body,
      html, h3, p {
        margin: 0;
        padding: 0;
      }
      * {
        box-sizing: border-box;
      }

      body {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f2f3f5;
      }

      div.container {
        height: 100vh;
        flex: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6.25rem;
        align-content: center;
      }

      div.leftContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      div.leftContainer span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 19.125rem;
        font-weight: 600;
        color: #5965e0;
        width: 60%;
        background: url("http://localhost:3000/Union.svg") no-repeat center;
        background-size: contain;

        font-family: "Inter";
      }

      div.leftContainer p {
        text-align: center;

        font-family: "Inter";
        font-size: 3.5rem;
        font-weight: 600;
        color: #2e384d;

        max-width: 408px;
      }

      div.rightContainer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }

      div.rightContainer h3 {
        font-family: "Inter";
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        text-transform: uppercase;
        color: #666666;
        opacity: 0.5;
      }

      div.rightContainer p {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 48px;

        color: #666666;
      }

      div.rightContainer p span {
        color: #5965e0;
      }

      div.rightContainer div {
        margin-bottom: 2rem;
      }

      div.rightContainer div + div {
        width: 70%;
        border-top: 1.5px solid #DCDDE0;
        padding-top: 2rem;
      }

      div.rightContainer div h3 {
        margin-bottom: 10px;
      }

      .logo img {
        margin-top: 2rem;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="leftContainer">
        <span>${level}</span>
        <p>Avancei para o pŕoximo level</p>
      </div>
      <div class="rightContainer">
        <div class="challenges">
          <h3 class="highlight">Desafios</h3>
          <p><span>${completedChallenges}</span> completados</p>
        </div>
        <div class="experience">
          <h3 class="highlight">Experiência</h3>
          <p><span>${neededExperience}</span> xp</p>
        </div>
        <div class="logo">
          <img src=${
            process.env.NODE_ENV === 'development'
              ? 'http://localhost:3000'
              : 'https://moveit-plum.vercel.app/'
          }/logo.svg alt="logo" />
        </div>
      </div>
    </div>
  </body>
</html>
`
}
