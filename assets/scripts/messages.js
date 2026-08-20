const messageGroup = document.querySelector(".messages");
const outputNamesBtn = messageGroup.querySelector(".output-names-btn");
const outputMessagesBtn = messageGroup.querySelector(".output-messages-btn");

const messages = [
    { id: 1, name: "Ivo", message: "hello", date: new Date() },
    { id: 2, name: "Ivo", message: "how are you", date: new Date() },
    { id: 3, name: "Wally", message: "hi)", date: new Date() },
    { id: 4, name: "Wally", message: "fine)", date: new Date() },
];

function readUsersNames(messages) {
    return new Set(
        messages.map((message) => {
            return message.name;
        }),
    );
}

function readUsersMessages(messages) {
    const usersMessages = new Map();

    for (message of messages) {
        if (!usersMessages.has(message.name)) {
            usersMessages.set(message.name, [
                {
                    message: message.message,
                    date: message.date,
                },
            ]);
        } else {
            usersMessages.set(message.name, [
                ...usersMessages.get(message.name),
                {
                    message: message.message,
                    date: message.date,
                },
            ]);
        }
    }

    return usersMessages;
}

outputNamesBtn.addEventListener("click", () => {
    console.log(readUsersNames(messages));
});

outputMessagesBtn.addEventListener("click", () => {
    console.log(readUsersMessages(messages));
});
