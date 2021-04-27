const accordion = (triggersSelector, itemsSelector) => {
  var btns = document.querySelectorAll(triggersSelector);
  var blocks = document.querySelectorAll(itemsSelector);

  const removeBtnsClass = (classActive = "active") => {
    // const btns = document.querySelectorAll(".submission-table__row");
    btns.forEach((btn) => {
      btn.classList.remove(classActive);
    });
  };

  btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      let activeState = this.classList.contains("active");
      removeBtnsClass();
      if (!activeState) {
        this.classList.add("active");
      }
    });
  });
};

const openedBlock = (triggerBtn, block) => {
  const btns = document.querySelectorAll(triggerBtn);
  const blocks = document.querySelectorAll(block);
  btns.forEach((btn, index) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      blocks.forEach((item, idx) => {
        if (index === idx) {
          item.classList.toggle("active");
        } else {
          item.classList.remove("active");
        }
      });
    });
  });
};

window.addEventListener("DOMContentLoaded", () => {
  accordion(".sidebar__dropdown", ".sidebar__submenu");
  openedBlock(".color__add-circle", ".color__change");
  openedBlock(".table__row", ".edit-block");
  openedBlock(".table__edit", ".plan-edit");
  openedBlock(".table__row", ".reviews-edit");
  accordion(".submission-table__row", ".wedding-edit");
  accordion(".vendors-table__row", ".plan-edit");
});

const template = document.getElementById("template");

if (document.querySelector(".vendor-type__link")) {
  tippy(".vendor-type__link", {
    content: template.innerHTML,
    allowHTML: true,
    interactive: true,
  });
}

$(document).ready(function () {
  $("select").niceSelect();
});
