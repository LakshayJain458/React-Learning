# BlogSphere

BlogSphere is a feature-rich blog platform built using modern web technologies. It includes functionalities for adding posts, user authentication (signin/signup), displaying all posts, and integrating the TinyMCE editor for rich text formatting. This project leverages React, Vite, and Appwrite, along with Tailwind CSS for styling.

## Features

- **Add Posts**: Create and publish new blog posts with ease.
- **User Authentication**: Secure signin and signup functionalities for users.
- **View All Posts**: Browse all published posts.
- **Rich Text Editing**: Integrated TinyMCE editor for advanced text formatting.
- **State Management**: Efficient state management using React hooks and local storage.
- **Configuration Management**: Secure configuration using environment files.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Appwrite
- **Editor**: TinyMCE
- **Tools**: React hooks, Local storage, Environment files

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/YourGitHubUsername/BlogSphere.git
    cd BlogSphere
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root directory and add the following:
    ```
    REACT_APP_API_ENDPOINT=your-appwrite-endpoint
    REACT_APP_PROJECT_ID=your-appwrite-project-id
    ```

4. **Start the development server**
    ```bash
    npm run dev
    ```

    The application should now be running on `http://localhost:3000`.

## Usage

- **Sign Up / Sign In**: Create a new account or log into an existing one.
- **Create Post**: Use the "Add Post" feature to create a new blog entry. Format your post using the integrated TinyMCE editor.
- **View Posts**: Browse through all the published posts.

## Folder Structure

```
BlogSphere/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Appwrite](https://appwrite.io/)
- [TinyMCE](https://www.tiny.cloud/)
- [Tailwind CSS](https://tailwindcss.com/)
