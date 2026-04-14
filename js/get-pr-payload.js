module.exports = async ({github, context, core, glob, io, exec, getOctokit}) => {
  core.info(`Getting PR #${context.issue.number} from ${context.repo.owner}/${context.repo.repo}`)

  try {
    const response = await github.rest.pulls.get({
      owner: context.repo.owner,
      repo: context.repo.repo,
      pull_number: context.issue.number
    })
    core.setOutput('output', response.data)
  } catch (err) {
    core.setFailed(`Request failed with error ${err}`)
  }
}
