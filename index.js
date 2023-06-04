const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/user/:user', (req, res) => {

    fetch(`https://api.github.com/users/${req.params.user}`)
    .then(response => response.json())
    .then(data => {

        const {
            login,
            avatar_url,
            repos_url,
            name,
            blog,
            location,
            bio,
            followers
        } = data
    
        res.send(
            {
                username: login,
                avatar: avatar_url,
                repos: repos_url,
                name: name,
                blog: blog,
                location: location,
                bio: bio,
                followers: followers
            }
        )
        
    })

})

app.listen(PORT, () => {

    console.log(`Open Server on ${PORT}`)

})