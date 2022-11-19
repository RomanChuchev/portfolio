const form = document.getElementById("form");

async function handleSubmit(event) {
  event.preventDefault();
  let error = formValidate(form);
  const status = document.getElementById("form-status");
  const data = new FormData(event.target);

  if (error === 0) {
    form.classList.add("_sending");
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          const thanksMessege = document.getElementById("thanks");
          popupCard.innerHTML = "";
          popupCard.append(thanksMessege);
          popupOpen(popup);

          form.reset();
          form.classList.remove("_sending");
          setTimeout(() => {
            status.innerHTML = "";
          }, 3000);
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              status.innerHTML = data["errors"]
                .map((error) => error["message"])
                .join(", ");
            } else {
              status.innerHTML = `
              <div class="form-item  padd-15">
                <p class="form-error">Oops! There was a problem submitting your form!</p>
              </div>`;
              clearStatus(status);
            }
          });
        }
      })
      .catch((error) => {
        status.innerHTML = `
        <div class="form-item  padd-15">
          <p class="form-error">Oops! There was a problem submitting your form!</p>
        </div>`;
        clearStatus(status);
      });
  } else {
    status.innerHTML = `
    <div class="form-item  padd-15">
      <p class="form-error">Please fill in the required fields!</p>
    </div>`;
    clearStatus(status);
  }
}
form.addEventListener("submit", handleSubmit);

function formValidate() {
  let error = 0;
  let formReq = document.querySelectorAll("._req");

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input);

    if (input.classList.contains("_email")) {
      if (emailTest(input)) {
        formAddError(input);
        error++;
      }
    } else if (
      input.getAttribute("type") === "checkbox" &&
      input.checked === false
    ) {
      formAddError(input);
      error++;
    } else {
      if (input.value === "") {
        formAddError(input);
        error++;
      }
    }
  }
  return error;
}
function formAddError(input) {
  input.parentElement.classList.add("_error");
  input.classList.add("_error");
}
function formRemoveError(input) {
  input.parentElement.classList.remove("_error");
  input.classList.remove("_error");
}
//Функция теста email
function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

function clearStatus(status) {
  const formItems = document.querySelectorAll(".form-item");
  for (let i = 0; i < formItems.length; i++) {
    formItems[i].addEventListener("click", () => {
      status.innerHTML = "";
    });
  }
}
