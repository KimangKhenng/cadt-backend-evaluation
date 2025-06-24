// data.js

const journalists = [
    { id: 1, name: "Alice Johnson", email: "alice.johnson@newsco.com" },
    { id: 2, name: "Bob Martinez", email: "bob.martinez@newsco.com" },
    { id: 3, name: "Clara Lee", email: "clara.lee@newsco.com" }
];

const categories = [
    { id: 1, name: "Politics" },
    { id: 2, name: "Technology" },
    { id: 3, name: "Sports" }
];

const articles = [
    {
        id: 1,
        title: "Election Results 2025",
        content: "The final results of the 2025 elections are out...",
        journalistId: 1,
        categoryId: 1
    },
    {
        id: 2,
        title: "New Smartphone Breakthrough",
        content: "A revolutionary phone with foldable glass has been released...",
        journalistId: 2,
        categoryId: 2
    },
    {
        id: 3,
        title: "Champions League Highlights",
        content: "Here's what you missed in last night's Champions League game...",
        journalistId: 3,
        categoryId: 3
    },
    {
        id: 4,
        title: "Tech Giants Face Congress",
        content: "Major tech CEOs testify on regulation and privacy...",
        journalistId: 1,
        categoryId: 2
    },
    {
        id: 5,
        title: "Olympics 2028: Cities Shortlisted",
        content: "These are the cities that made the final cut...",
        journalistId: 3,
        categoryId: 3
    }
];

export {
    articles,
    journalists,
    categories
};
