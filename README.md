# gha-pr-payload

GitHub Action to get Pull Request payload and optionnally check if there are conflicts in the PR
via the mergeable status.

## Usage

```yaml
steps:
  - name: Get Pull Request Payload
    uses: albr21/gha-pr-payload@1.0.0
    id: get-pr-payload
    with:
      check-conflicts: true
      comment-on-conflicts: true
      error-message-on-conflicts: true
      exit-on-conflicts: true
      command-line-interpreter: bash
```

Enable output variable:

| Name | Description |
| --- | --- |
| `pr-payload` | Pull Request Payload |
| `mergeable` | Mergeable Status |
| `merge-commit-sha` | Merge Commit SHA |

## Contributing

Check out the [CONTRIBUTING](CONTRIBUTING.md) file for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
