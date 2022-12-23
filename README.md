# Yo Mama Jokes API
An API for retrieving random Yo Mama jokes.

# Live at
[Yomamma API](https://yomamma-api.cyclic.app/)

# Try this at
[Yomamma](https://yomamma.netlify.app/)

# API Endpoints
- `GET /jokes`- Returns a random joke from the jokes.json file.
### Example Request

```
https://yomamma-api.cyclic.app/jokes
```
```js
{
  "joke": "Yo momma's so fat that she doesn't just have a low center of gravity, she has an elliptical orbit."
}
```
- `GET /search`- Returns a random joke from the jokes.json file that includes the provided query in the joke.
### Query Parameters

| Name     |      Required|  Type | Description  |
|----------|:-------------:|------:|------------:|
|  `query` |  Yes | string | The query to search for in the jokes.  |

### Example Request

```
https://yomamma-api.cyclic.app/search?query=old
```

```js
{
  "joke": "Yo mama's so old, when she was in school history was called current events."
}
```
