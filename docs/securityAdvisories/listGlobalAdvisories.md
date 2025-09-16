---
name: List global security advisories
example: octokit.rest.securityAdvisories.listGlobalAdvisories()
route: GET /advisories
scope: securityAdvisories
type: API method
---

# List global security advisories

Lists all global security advisories that match the specified parameters. If no other parameters are defined, the request will return only GitHub-reviewed advisories that are not malware.

By default, all responses will exclude advisories for malware, because malware are not standard vulnerabilities. To list advisories for malware, you must include the `type` parameter in your request, with the value `malware`. For more information about the different types of security advisories, see "[About the GitHub Advisory database](https://docs.github.com/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database#about-types-of-security-advisories)."

```js
octokit.rest.securityAdvisories.listGlobalAdvisories();
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
    <tr><td>ghsa_id</td><td>no</td><td>

If specified, only advisories with this GHSA (GitHub Security Advisory) identifier will be returned.

</td></tr>
<tr><td>type</td><td>no</td><td>

If specified, only advisories of this type will be returned. By default, a request with no other parameters defined will only return reviewed advisories that are not malware.

</td></tr>
<tr><td>cve_id</td><td>no</td><td>

If specified, only advisories with this CVE (Common Vulnerabilities and Exposures) identifier will be returned.

</td></tr>
<tr><td>ecosystem</td><td>no</td><td>

If specified, only advisories for these ecosystems will be returned.

</td></tr>
<tr><td>severity</td><td>no</td><td>

If specified, only advisories with these severities will be returned.

</td></tr>
<tr><td>cwes</td><td>no</td><td>

If specified, only advisories with these Common Weakness Enumerations (CWEs) will be returned.

Example: `cwes=79,284,22` or `cwes[]=79&cwes[]=284&cwes[]=22`

</td></tr>
<tr><td>is_withdrawn</td><td>no</td><td>

Whether to only return advisories that have been withdrawn.

</td></tr>
<tr><td>affects</td><td>no</td><td>

If specified, only return advisories that affect any of `package` or `package@version`. A maximum of 1000 packages can be specified.
If the query parameter causes the URL to exceed the maximum URL length supported by your client, you must specify fewer packages.

Example: `affects=package1,package2@1.0.0,package3@2.0.0` or `affects[]=package1&affects[]=package2@1.0.0`

</td></tr>
<tr><td>published</td><td>no</td><td>

If specified, only return advisories that were published on a date or date range.

For more information on the syntax of the date range, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."

</td></tr>
<tr><td>updated</td><td>no</td><td>

If specified, only return advisories that were updated on a date or date range.

For more information on the syntax of the date range, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."

</td></tr>
<tr><td>modified</td><td>no</td><td>

If specified, only show advisories that were updated or published on a date or date range.

For more information on the syntax of the date range, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."

</td></tr>
<tr><td>epss_percentage</td><td>no</td><td>

If specified, only return advisories that have an EPSS percentage score that matches the provided value.
The EPSS percentage represents the likelihood of a CVE being exploited.

</td></tr>
<tr><td>epss_percentile</td><td>no</td><td>

If specified, only return advisories that have an EPSS percentile score that matches the provided value.
The EPSS percentile represents the relative rank of the CVE's likelihood of being exploited compared to other CVEs.

</td></tr>
<tr><td>before</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>after</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>direction</td><td>no</td><td>

The direction to sort the results by.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>sort</td><td>no</td><td>

The property to sort the results by.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/security-advisories/global-advisories#list-global-security-advisories).
