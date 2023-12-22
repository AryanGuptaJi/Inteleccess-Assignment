function onLoad() {
    Xrm.Page.data.entity.addOnSave(onSaveHandler);
}

function onSaveHandler(executionContext) {
    var formContext = executionContext.getFormContext();
    var preferenceType = formContext.getAttribute("new_preferencetype").getValue();
    var description = formContext.getAttribute("new_description").getValue();

    if (!preferenceType || !description) {
        formContext.ui.setFormNotification("Preference Type and Description are required.", "ERROR", "validationError");
        executionContext.getEventArgs().preventDefault();
    } else {
        formContext.ui.clearFormNotification("validationError");
    }
}
