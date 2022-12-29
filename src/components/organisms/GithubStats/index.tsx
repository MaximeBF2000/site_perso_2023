import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import { Stats } from './Stats.component'
import { getCodeLines, getRepos, getTotalNumberOfCommits } from './github.utils'

const bigintFormatter = new Intl.NumberFormat('en', {
  notation: 'compact',
  compactDisplay: 'long'
})

interface Props {
  className?: string
}

export const GithubStats: React.FC<Props> = ({ className }) => {
  const [githubState, setGithubState] = useState({
    numberOfRepos: 0,
    numberOfLines: 0,
    numberOfCommits: 0
  })

  useEffect(() => {
    async function getGithubData() {
      const repos = await getRepos()

      console.log({ repos })

      const totalLines = await getCodeLines(repos)
      const numberOfCommits = await getTotalNumberOfCommits(repos)

      setGithubState({
        numberOfRepos: repos.length,
        numberOfLines: totalLines,
        numberOfCommits
      })
    }
    getGithubData()
  }, [])

  return (
    <div className={cx('p-12 flex flex-col items-center', className)}>
      <p className="mb-8 italic text-gray-700">
        Stats pulled from Github &copy;
      </p>
      <div className="flex justify-around w-full">
        <Stats
          prelabel="Currently"
          value={githubState.numberOfRepos}
          postlabel="Public repos available"
        />
        <Stats
          prelabel="More than"
          value={bigintFormatter.format(githubState.numberOfLines)}
          postlabel="Lines of code edited"
        />
        <Stats
          prelabel="More than"
          value={bigintFormatter.format(githubState.numberOfCommits)}
          postlabel="Commits done"
        />
      </div>
    </div>
  )
}
