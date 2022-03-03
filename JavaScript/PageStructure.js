
function createNav()
{
  document.write
  (`
    <h6>
      <ul class="nav justify-content-start" style="position: absolute;">
        <li class="nav-item">
          <a class="nav-link active" style="color: black;" aria-current="page" href="index.html">Home</a>
        </li>
      </ul>

      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link" style="color: black;" href="aboutMe.html">About Me</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" style="color: black;" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Connect</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="mailto:allen.samuel.business@gmail.com">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" style="width: 20%;">
              &nbsp;&nbsp;Gmail
            </a>
            <a class="dropdown-item" href="#">
              <img src="./SVG/linkedIn.svg" style="width: 20%;">
              &nbsp;&nbsp;LinkedIn
            </a>
          </div>
        </li>
      </ul>
    </h6>

    <br><br><br><br>
  `);
}

function createFooter()
{
  document.write
  (`
    <footer>
      <br><br><br><br><br><br><br><br>

      <p style="text-align: right;">
        Portfolio 2021
        <br>
        Designed and developed by me
        <br>
        <a href="aboutMe.html" class="link-dark">
          info
        </a>
      </p>
      <br><br>
    </footer>
  `);
}
