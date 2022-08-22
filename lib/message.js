// ★ ———————————————————————————————————————————————————————
//  ★ Message.js
// ★ ———————————————————————————————————————————————————————
class Message {
    // Method pesan di konsol setelah package berhasil dijalankan
    displayPackageMessageIsSuccesfullyRun(displayMessage = true) {
        if (displayMessage)
            console.log("Our Aurora Package Are Run Succesfully!");
        return this;
    }
}

const MessageInstance = new Message();
export default MessageInstance;

