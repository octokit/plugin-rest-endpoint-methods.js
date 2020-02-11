# Get a single authorization

**This method is deprecated.**

**Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).

```js
octokit.oauthAuthorizations.getAuthorization({
  authorization_id
});
```

## Parameters

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>required</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>authorization_id</td><td>yes</td><td>

authorization_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
