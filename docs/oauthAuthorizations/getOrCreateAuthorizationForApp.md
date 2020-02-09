# Get-or-create an authorization for a specific app

**This method is deprecated.**

**Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).

**Warning:** Apps must use the [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).

Creates a new authorization for the specified OAuth application, only if an authorization for that application doesn't already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.

If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication)."

**Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).

```js
octokit.oauthAuthorizations.getOrCreateAuthorizationForApp(
  client_id,
  client_secret
);
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
    <tr><td>client_id</td><td>yes</td><td>

client_id parameter

</td></tr>
<tr><td>client_secret</td><td>yes</td><td>

The 40 character OAuth app client secret associated with the client ID specified in the URL.

</td></tr>
<tr><td>scopes</td><td>no</td><td>

A list of scopes that this authorization is in.

</td></tr>
<tr><td>note</td><td>no</td><td>

A note to remind you what the OAuth token is for.

</td></tr>
<tr><td>note_url</td><td>no</td><td>

A URL to remind you what app the OAuth token is for.

</td></tr>
<tr><td>fingerprint</td><td>no</td><td>

A unique string to distinguish an authorization from others created for the same client and user. If provided, this API is functionally equivalent to [Get-or-create an authorization for a specific app and fingerprint](https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint).

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
