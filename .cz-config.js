module.exports = {
    types: [
    { value: 'feat', name: 'feat: A new feature' },
    { value: 'fix', name: 'fix: A bug fix' },
    // Add more customized commit types as needed
    ],
    scopes: [
    { name: 'module-a' },
    { name: 'module-b' },
    // Add more customized scopes as needed
          ],
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
};