import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  //   "Private forum access",
  //   "Member resources",
  //   "Entry to annual conference",
  //   "Official member t-shirt",
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Make Your Own Preferable Playlist
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            "Create personalized playlists by adding your favorite videos.
            Organize and access your curated content easily for a tailored
            viewing experience"
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Playlist
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Your Interest Your Choice.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                maxWidth: "400px",
                margin: "10px",
              }}
            >
              <img
                src="https://i.ytimg.com/vi/CZUKl6dL23o/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCFFGXOPSZQU0XRfuPHaUPePy5_nQ"
                alt="Playlist Thumbnail"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "8px",
                  objectFit: "cover",
                  marginRight: "10px",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4>Learn video editing in just 2 Months</h4>
                <p>52 videos</p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                maxWidth: "400px",
                margin: "10px",
              }}
            >
              <img
                src="https://i.ytimg.com/vi/CZUKl6dL23o/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCFFGXOPSZQU0XRfuPHaUPePy5_nQ"
                alt="Playlist Thumbnail"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "8px",
                  objectFit: "cover",
                  marginRight: "10px",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4>Learn video editing in just 2 Months</h4>
                <p>52 videos</p>
              </div>
            </div>

            {/* <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-indigo-600"
                  />
                  {feature}
                </li>
              ))}
            </ul> */}
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Add Your Own Playlist
                </p>
                <p
                  style={{
                    marginTop: "1.5rem",
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3zVRaSXQQNuABvBZGc3adCpxVISBpsy727-RBgJ4nO636pevG6W5fHTM4LvdhqsvI18&usqp=CAU"
                    alt="Your Description"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: "0.5rem",
                      boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </p>

                <div className="mt-6 flex justify-center">
                  <div className="flex items-center space-x-4">
                    <input
                      type="text"
                      placeholder="Add Link"
                      className="w-full px-4 py-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button className="px-10 py-1 text-white bg-blue-500 rounded hover:bg-blue-600">
                      PlayList+
                    </button>
                  </div>
                </div>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Make your learning journey more easy by Summarizer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
