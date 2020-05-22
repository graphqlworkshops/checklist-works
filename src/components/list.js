import React from "react"

const STATUS = Object.freeze({
  IDEA: "IDEA",
  DRAFT: "DRAFT",
  PEER: "PEER-REVIEW",
  PRE: "PRE-RELEASE",
  RELEASED: "RELEASED",
  UPDATED: "UPDATED",
})

const inventory = [
  {
    id: "2",
    title: "Engineering Manager first 30 days",
    status: STATUS.DRAFT,
    eta: "June, 2020",
    author: "Santiago Esteva",
    img:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "3",
    title: "Reusable Components Readiness",
    status: STATUS.IDEA,
    eta: "June, 2020",
    author: "Santiago Esteva",
    img:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: "4",
    title: "Deploy your website in one day",
    status: STATUS.IDEA,
    eta: "July, 2020",
    author: "Santiago Esteva",
    img:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
]

const ListItem = ({ id, title, status, eta, img, author }) => {
  return (
    <li className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
      <a
        href={`https://twitter.com/intent/tweet?text=%40sesteva%20I%20need%20checklist%20${id}%20now!%20%20https%3A%2F%2Fchecklist.works`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="flex-shrink-0">
              <img className="h-12 w-12 rounded-full" src={img} alt="" />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <div className="text-sm leading-5 font-medium text-indigo-600 break-words">
                  #{id} - {title}
                </div>
                <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 hidden md:block">
                  <span>by </span>
                  <span className="truncate font-medium text-gray-600">
                    {author}
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <div>
                  <div className="text-sm leading-5 text-gray-900">
                    <span>ETA: </span>
                    <time dateTime="2020-01-07">{eta}</time>
                  </div>
                  <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                    <svg
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Status: {status}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <a
              href={`https://twitter.com/intent/tweet?text=%40sesteva%20I%20need%20checklist%20${id}%20now!%20%20https%3A%2F%2Fchecklist.works`}
              target="_blank"
              rel="noopener noreferrer"
              className="nline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150"
            >
              <span>Need this today!</span>
            </a>
          </div>
        </div>
      </a>
    </li>
  )
}

export const List = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md px-10">
      <ul>
        {inventory.map(checklist => {
          return <ListItem {...checklist} key={checklist.id} />
        })}
      </ul>
    </div>
  )
}
