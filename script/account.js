      // functionality for nickname inputs
      function enableNicknameEdit(
        inputId,
        hintId,
        btnId,
        editId,
        closeId,
        mainDiv
      ) {
        const input = document.getElementById(inputId);
        const hint = document.getElementById(hintId);
        const buttons = document.getElementById(btnId);
        const editBtn = document.getElementById(editId);
        const closeBtn = document.getElementById(closeId);
        const div = document.getElementById(mainDiv);

        input.disabled = false;
        input.classList.add("enabled-input");
        input.classList.remove("hidden");
        hint.classList.remove("hidden");
        buttons.classList.remove("hidden");
        editBtn.classList.add("hidden");
        closeBtn.classList.remove("hidden");
        div.classList.add("bg-edit-mode");
      }

      function disableNicknameEdit(
        inputId,
        hintId,
        btnId,
        editId,
        closeId,
        mainDiv
      ) {
        const input = document.getElementById(inputId);
        const hint = document.getElementById(hintId);
        const buttons = document.getElementById(btnId);
        const editBtn = document.getElementById(editId);
        const closeBtn = document.getElementById(closeId);
        const div = document.getElementById(mainDiv);

        input.disabled = true;
        input.classList.remove("enabled-input");
        hint.classList.add("hidden");
        buttons.classList.add("hidden");
        editBtn.classList.remove("hidden");
        closeBtn.classList.add("hidden");
        div.classList.remove("bg-edit-mode");
      }

      // functionality for email and password
      function enableEdit(divId, headingId, editId, closeId, mainDiv) {
        const div = document.getElementById(divId);
        const heading = document.getElementById(headingId);
        const edit = document.getElementById(editId);
        const close = document.getElementById(closeId);
        const main = document.getElementById(mainDiv);

        div.classList.remove("hidden");
        heading.classList.add("hidden");
        edit.classList.add("hidden");
        close.classList.remove("hidden");
        main.classList.add("bg-edit-mode");
      }

      function disableEdit(divId, headingId, editId, closeId, mainDiv) {
        const div = document.getElementById(divId);
        const heading = document.getElementById(headingId);
        const edit = document.getElementById(editId);
        const close = document.getElementById(closeId);
        const main = document.getElementById(mainDiv);

        div.classList.add("hidden");
        heading.classList.remove("hidden");
        edit.classList.remove("hidden");
        close.classList.add("hidden");
        main.classList.remove("bg-edit-mode");
      }