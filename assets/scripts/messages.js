const messages = [
    { id: 1, name: "Ivo", message: "hello", date: new Date() },
    { id: 2, name: "Ivo", message: "how are you", date: new Date() },
    { id: 3, name: "Wally", message: "hi)", date: new Date() },
    { id: 4, name: "Wally", message: "fine)", date: new Date() },
];

const usersNames = new Set(
    messages.map((message) => {
        return message.name;
    }),
);

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

console.log(usersNames);
console.log(usersMessages);
