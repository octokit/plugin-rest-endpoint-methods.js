---
name: Get feeds
example: octokit.rest.activity.getFeeds()
route: GET /feeds
scope: activity
type: API method
---

# Get feeds

GitHub provides several timeline resources in [Atom](<http://en.wikipedia.org/wiki/Atom_(standard)>) format. The Feeds API lists all the feeds available to the authenticated user:

- **Timeline**: The GitHub global public timeline
- **User**: The public timeline for any user, using `uri_template`. For more information, see "[Hypermedia](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#hypermedia)."
- **Current user public**: The public timeline for the authenticated user
- **Current user**: The private timeline for the authenticated user
- **Current user actor**: The private timeline for activity created by the authenticated user
- **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
- **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub.

**Note**: Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) since current feed URIs use the older, non revocable auth tokens.

```js
octokit.rest.activity.getFeeds();
```

## Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/activity/feeds#get-feeds).
