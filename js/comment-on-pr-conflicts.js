module.exports = async ({github, context, core, glob, io, exec, getOctokit}) => {
  core.info(`Commenting on PR #${context.issue.number} from ${context.repo.owner}/${context.repo.repo} to notify that there are conflicts and CI/CD cannot continue`)

  const data = JSON.parse(core.getInput('input', {required: false}))
  const body = `Automated Message 🤖:
  
  Hello there!
  There are merge conflicts on the PR. ❌
  The conflicts are between ▶️${data['base_ref']}◀️ and ▶️${data['head_ref']}◀️.
  The CI/CD pipeline cannot continue until the conflicts are fixed.
  They are listed at the bottom of this page.
  `

  try {
    await github.rest.issues.createComment({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      body: body
    })
  } catch (err) {
    core.setFailed(`Request failed with error ${err}`)
  }
}
