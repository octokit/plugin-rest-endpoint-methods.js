# Update an existing authorization

**This method is deprecated.**

**Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).

If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication)."

You can only send one of these scope keys at a time.

```js
octokit.oauthAuthorizations.updateAuthorization(authorization_id);
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
<tr><td>scopes</td><td>no</td><td>

Replaces the authorization scopes with these.

</td></tr>
<tr><td>add_scopes</td><td>no</td><td>

A list of scopes to add to this authorization.

</td></tr>
<tr><td>remove_scopes</td><td>no</td><td>

A list of scopes to remove from this authorization.

</td></tr>
<tr><td>note</td><td>no</td><td>

A note to remind you what the OAuth token is for. Tokens not associated with a specific OAuth application (i.e. personal access tokens) must have a unique note.

</td></tr>
<tr><td>note_url</td><td>no</td><td>

A URL to remind you what app the OAuth token is for.

</td></tr>
<tr><td>fingerprint</td><td>no</td><td>

A unique string to distinguish an authorization from others created for the same client ID and user.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
