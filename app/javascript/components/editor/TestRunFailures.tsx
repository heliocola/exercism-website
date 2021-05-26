import React from 'react'
import { TestRun } from './types'
import { TestsGroupList } from './TestsGroupList'

export const TestRunFailures = ({
  testRun,
}: {
  testRun: TestRun
}): JSX.Element => {
  return testRun.version === 2 || testRun.version === 3 ? (
    <TestsGroupList tests={testRun.tests} />
  ) : (
    <pre className="v1-message">
      <code dangerouslySetInnerHTML={{ __html: testRun.messageHtml }} />
    </pre>
  )
}
