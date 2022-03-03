
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
            <a class="dropdown-item" href="mailto:allen.samuel.business@gmail.com" style="display: flex; align-items: center;">
              <img src="https://img.icons8.com/fluency-systems-filled/144/000000/ms-outlook.png" style="width: 20%;">
              &nbsp;&nbsp;Email
            </a>
            <a class="dropdown-item" href="https://github.com/Sam-Allen-Dev" target="blank_" style="display: flex; align-items: center;">
              <img src="./PNG/GitHub Logo Black Transparent.png" style="width: 20%;">
              &nbsp;&nbsp;GitHub
            </a>
	    <!--
            <a class="dropdown-item" href="#" style="display: flex; align-items: center;">
              <img src="./SVG/linkedIn.svg" style="width: 20%;">
              &nbsp;&nbsp;LinkedIn
            </a>
	    -->
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
    <footer style="position: relative; min-height: 20%; margin-top:20%; padding: 0; margin-bottom: 0;">

      <p style="text-align: right;">
        Portfolio 2021
        <br>
        Designed and developed by me
        <br>
        <a href="aboutMe.html" class="link-dark">
          info
        </a>
      </p>
    </footer>
  `);
}
