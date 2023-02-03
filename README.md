# nucleus

By Jim Mannix. &nbsp;&nbsp;&nbsp;Version 0.9.0, &nbsp;released 2023-02-02 &nbsp;&nbsp;&nbsp;[MIT LICENSE FILE](LICENSE.md)



----

#### "The Nucleus Stack" &nbsp; or &nbsp;"nucleus" &nbsp;is released under the the MIT license. &nbsp;&nbsp;&copy;2023 &nbsp;Jim Mannix

#### This is a modular, generalized, open-source full stack web application with a complete, automated Docker infrastructure and a best-in-class technology selection for both frontend and backend.

----

There are a lot of code snippets and partial solutions out there and some of that is even really good, but there is a serious shortage of high quality, full-featured, industrial-strength, open-source web application and stack templates which are ready to run and ready to customize from a near feature-complete state. I really don't call Nucleus an application template because it is very complete and ready to run both locally and deployed to the cloud. It is so complete as to even automatically populate its own test/mock data. Very few manual steps are required to get Nucleus running. The specific app is a very nice admin dashboard application, loaded with data visualization and great general purpose web app features, many provided by Material UI components. Isn't a complete and running stack and application more useful than part of one? I think so.

In this way, The Nucleus Stack serves an important need, not only for people who want to get a good web app running as fast as possible, but also for people who are learning and developing different parts of such a stack and need to work with the technology in a complete context, with good data already in place. The Nucleus Stack meets those and many other needs. It is as flexible as it is robust and uses the latest and greatest libraries, services, design patterns and strategies for 2023. I hope you find it valuable to your projects and your learning adventure.

>
> In the near future, the live demo of the current release will be running at the following URL:
> 
> https://stackdemo.xyz

----

## Features and Technologies

Features and technologies are covered in three sections. The Platform section covers the Docker, Docker Compose, custom automation, local development mode, cloud-deployed mode and related areas. The Frontend section covers the React web application which technically "runs" in the user's web browser but is "served" by NGINX. I consider NGINX to be part of the backend since it plays a central routing role for more than just the website even if it is often thought of as being at the "front" of everything. The React application is complex enough to be all of the "Frontend" so we will talk about NGINX in the Backend section. The idea of front, back and a linear stack are just simplifications anyhow. The actual architecture is more of a graph than a stack, in fact.

### Frontend

- **React**
- **React Router**
- **Material UI** for fully-themed light/dark-switchable premium styling.
- (**Tailwind CSS** is another great option that comes with the **Next.js** variant of Nucleus.)
- **Custom GraphQL client** with loading, error and other states with friendly UI features.
- Data visualization with **Nivo Charts** with complete hooks into light/dark and styling.
- **React Guage Chart** for radial, automotive dash or instrument-style data display.
- Coming soon: **Matplotlib, Three.js, and React Three Fiber (R3F)** for data viz and more.
- Collapsable **MUI Sidebar** for navigation, with a nice implementation and good icons.
- **FullCalendar** event and scheduling application with day,week and month views.
- **MUI DataGrids** populated with quality data via GQL and the stack's data layers.
- **Quality Test/Mock** data from Kaggle etc, automatically initialized.
- Automatic environment-detection and configuration in the frontend.

### Backend

- **NGINX** with a powerful configuration of redirects, api proxy-pass, caching and more.
- **Apollo GraphQL Server**
- **Mongoose ODM** (Object-Data Modeling library with db drivers) Provides schemas, models.
- **MongoDB**
- Custom automation everywhere, and elegantly so.
- Custom Apollo code for MongoDB data validation, initialization and loading.
- Automatic environment-detection and configuation in the backend.

### Platform

- Docker & Docker Compose for nice local dev as well as simple Docker Engine deployments to a VM.
- Full automation using shell scrips for infrastructure setup, builds, deployment and more.
- Automatic mapping of two persistent volumes to local dev and cloud persistent storage.
-  - General-purpose volume for any kind of cross-container sharing and persistence.
-  - Database raw data volume for perstence of your mock, test and live application data.
- Containers can come and go but you can persist and share exactly the data you want to.
- The Docker Compose files are carefully crafted and map ports smartly.
- Dockerfiles are carefully crafted and quite optimized.
- A virtual Node container only exists during the React build then efficently vanishes.
- The best, most secure and smallest base images are used whenever possible.
- The stack startup sequence is carefully orchestrated with port checks and smart timeouts.

----

## Dependencies

- Node, npm/npx
- Docker
- Docker Compose

----

## Installation and Setup

- Local, for development
- On a VM or Kubernetes cluster in the cloud
- Logical database and admin user createion (not yet automated but will be soon)
- Configuration

----

## Operation and Usage

- build
- deploy
- startup/shutdown
- log monitoring
- troubleshooting and analysis

----

## Testing

- Test/mock data
- Automatic loading of test/mock data
- Running tests

----

## Known Issues, Future Roadmap

TODO: Section needed.

## Getting Help

TODO: Section needed.
- Contact information


TODO: This is boilerplate verbage to customize: If you have questions, concerns, bug reports, etc, please file an issue in this repository's Issue Tracker.

## Getting involved

I would like to find some users of this software, in order to get some feedback.

I will consider working with contributors if you want to run your thoughts by me.
