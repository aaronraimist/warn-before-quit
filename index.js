var hasWarned;

var quitNotification = "quit-notification";

browser.commands.onCommand.addListener(listener);

function listener(command) {
  if (hasWarned) {
    browser.commands.onCommand.removeListener(listener);

    return;
  }

  if (command == "prevent-quit-mac") {
    browser.notifications.create(quitNotification, {
      "type": "basic",
      "title": "Firefox was prevented from quitting",
      "message": "Press ⌘-Q or ⌘-Shift-W again to quit."
    });
  }

  if (command == "prevent-quit") {
    browser.notifications.create(quitNotification, {
      "type": "basic",
      "title": "Firefox was prevented from quitting",
      "message": "Press Control-Q or Control-Shift-W again to quit."
    });
  }

  hasWarned = true;
}
