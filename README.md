# nucleus

By Jim Mannix. &nbsp;&nbsp;&nbsp;Version 0.9.0, &nbsp;released 2023-02-02 &nbsp;&nbsp;&nbsp;[MIT LICENSE FILE](LICENSE.md)



----

#### "The Nucleus Stack" &nbsp; or &nbsp;"nucleus" &nbsp;is released under the MIT license. &nbsp;&nbsp;&copy;2023 &nbsp;Jim Mannix

#### This is a modular, generalized, open-source full stack web application with a complete, automated Docker infrastructure and a best-in-class technology selection for both frontend and backend.

#### The Nucleus frontend React application is rich with the best modern data-integrated features and components. It is a beautiful, responsive frontend using all the best and latest design strategies, the incredible power of Material UI, Nivo data visualization and much more.

#### Nucleus is enterprise-grade infrastructure and premium UI streamlined into the developer's laptop, so it can be shaped into the next killer app with minimal effort. The Nucleus stack is cloud-ready from the ground up, so it is one of the fastest ways to develop and release a top-quality application at any scale.

----

There are a lot of code snippets and partial solutions out there and some of that is even really good, but there is a serious shortage of high quality, full-featured, industrial-strength, open-source web application and stack templates which are ready to run and ready to customize from a near feature-complete state. I really don't call Nucleus an application template because it is very complete and ready to run both locally and deployed to the cloud. It is so complete as to even automatically populate its own test/mock data. Very few manual steps are required to get Nucleus running. The specific app is a very nice admin dashboard application, loaded with data visualization and great general purpose web app features, many provided by Material UI components. Isn't a complete and running stack and application more useful than part of one? I think so.

Nucleus runs completely and perfectly on the developer's local machine and with full data with almost no manual setup. This exact same code and stack then deploys to the cloud with all configuration done automatically and all data persisted as desired, where desired. The very best development and operations require this kind of streamlining and the benefits are profound in terms of application quality, data integrity and rapid feature development.

In this way, The Nucleus Stack serves an important need, not only for people who want to get a premium, high-performance web app running as fast as possible, but also for people who are learning and developing different parts of such a stack and need to work with the technology in a complete context, with good data already in place. The Nucleus Stack meets those and many other needs. It is as flexible as it is robust and uses the latest and greatest libraries, services, design patterns and strategies for 2023. I hope you find it valuable to your projects and your learning adventure.

>
> In the near future, the live demo of the current release will be running at the following URL:
> 
> https://stackdemo.xyz

----

## Features and Technologies

Features and technologies are covered in three sections. The **Platform** section covers the Docker, Docker Compose, custom automation, local development mode, cloud-deployed mode and related areas. The **Frontend** section covers the React web application which technically "runs" in the user's web browser but is "served" by NGINX. I consider NGINX to be part of the backend since it plays a central routing role for more than just the website even though it is often thought of as being at the "front" of everything. The React application is complex enough to be considered all of the "Frontend" so we will consider NGINX as being a **Backend** component. The idea of front, back and a linear stack are just simplifications anyhow. The actual architecture of The Nucleus Stack is more of a graph than a stack, in fact .. and not an a-cyclic graph at that, but I digress. We'll talk about graphs soon as GraphQL is at the core of the primary Nucleus architecture, with an optional traditional REST/SQL flavor that goes with the Next.js React variant of Nucleus. I've just touched on some big features which will be detailed in subsequent docs. Anyhow, the **Backend** covers everything running in containers and serving the React app and the data layers. Note that different Nucleus variants such as the Next.js variant, do blur these lines between frontend and backend a little, but we can split hairs on those details later.

### Frontend

- **React**
- **React Router**
- **Material UI** for fully-themed light/dark-switchable premium styling.
- (**Tailwind CSS** is another great option that comes with the **Next.js** variant of Nucleus.)
- (**Next.js** variant only: An additional **Node** container runs the **Next.js** "Frontend" services behind NGINX.)
- **Custom GraphQL client** with loading, error and other states with friendly UI features.
- (REST variant only: A custom REST client is used with features similar to the custom GraphQL client.)
- Data visualization with **Nivo Charts** with complete hooks into light/dark and styling.
- **React Guage Chart** for radial, automotive dash or instrument-style data display.
- Coming soon: **Matplotlib, Three.js, and React Three Fiber (R3F)** for data viz and more.
- Collapsable **MUI Sidebar** for navigation, with a nice implementation and good icons.
- **FullCalendar** event and scheduling application with day,week and month views.
- **MUI DataGrids** populated with quality data via GQL and the stack's data layers.
- **Quality Test/Mock** data from Kaggle etc, automatically initialized.
- Automatic environment-detection and configuration in the frontend.
- Best-practice browser address bar behavior: HTTPS redirects, SSL Security, bare-domain/www redirects. (backend)
- SEO is maximized everywhere possible.
- For a huge SEO boost, if your application/site goals allow it, use the Next.js variant of Nucleus.

### Backend

- **NGINX** with a powerful configuration of redirects, api proxy-pass, caching and more.
- **A-Plus SSL Security Rating** achievable with this NGINX configuration and the provided instructions.
- **Apollo GraphQL Server**
- **Mongoose ODM** (Object-Data Modeling library with db drivers) Provides schemas, models.
- **MongoDB**
- Custom automation everywhere, and elegantly so.
- Custom Apollo code for MongoDB data validation, initialization and loading.
- Automatic environment-detection and configuration in the backend.
- (REST variant: PostgreSQL replaces MongoDB and SQL replaces GraphQL as the query language.)
- (REST variant: Flask and Flask Restful replace Apollo. SQLAlchemy replaces Mongoose.)
- (REST variant: The backend language is Python while for the GraphQL architecture, Javascript is the language.)
- Future: I have plans to incorporate Redis and either Kafka or Celery, but I am looking for the right use case and architectural/computational/data-flow and performance optimization needs to justify this move.

### Platform

- Docker & Docker Compose for nice local dev as well as simple Docker Engine deployments to a VM.
- Full automation using shell scrips for infrastructure setup, builds, deployment and more.
- Automatic mapping of two persistent volumes to local dev and cloud persistent storage.
-  - General-purpose volume for any kind of cross-container sharing and persistence.
-  - Database raw data volume for persistence of your mock, test and live application data.
- Containers can come and go, but you can persist and share exactly the data you want to.
- The Docker Compose files are carefully crafted and map ports smartly.
- Dockerfiles are carefully crafted and quite optimized.
- A virtual Node container only exists during the React build then efficiently vanishes.
- The best, most secure and smallest base images are used whenever possible.
- The stack startup sequence is smartly orchestrated with both port checks and timeouts.
- Future: Utility/ops/dev/data tools and further automation may be included in additional containers.

----

## Dependencies

TODO: Write this section. These bullet points are only a rough outline.

- Node, npm/npx
- Docker
- Docker Compose

----

## Installation and Setup

TODO: Write this section. These bullet points are only a rough outline.

- Local, for development
- On a VM or Kubernetes cluster in the cloud
- Logical database and admin user creation (not yet automated but will be soon)
- Configuration (only minimal or no configuration is required)

----

## Operation and Usage

TODO: Write this section. These bullet points are only a rough outline.

- build
- deploy
- startup/shutdown
- log monitoring
- troubleshooting and analysis

----

## Cloud Deployment

TODO: Write this section. These bullet points are only a rough outline.

- Kubernetes cluster support. most or all configs can be provided in a near-ready state.
- Simple VM deployment using provided setup scripts and simple steps.
- Global-scale Kubernetes deployment is geared towards GCP where Nucleus runs on K8s.
- Powerful yet affordable standalone VM with persistent storage is geared towards AWS.
- Automation scripts for operation of the deployed stack are provided.
- Automation scripts and instructions to interact with the cloud services are provided.
- External Docker volumes for data persistence. (exactly like the local dev versions)

----

## Local Deployment and Development Environment

TODO: Write this section. These bullet points are only a rough outline.

- First, the macOS recipe will be covered but all can easily be adapted to Windows or Linux.
- IDE details for both IntelliJ WebStorm and VS Code.
- For Python variants, details about IntelliJ PyCharm, Pyenv and some other factors.
- External Docker volumes for data persistence. (exactly like the cloud versions)

----

## Testing

TODO: Write this section. These bullet points are only a rough outline.

- Test/mock data
- Automatic loading of test/mock data
- Running tests

----

## Known Issues, Future Roadmap

Nucleus still lacks a number of features which are important to meet the needs of most people who are interested in working with such a stack. The following areas are listed roughly in the planned order of implementation:

- User login and profiles
- User Authentication. Stack-resident will be default but 3rd party integration will be supported.
- External API federation under Apollo. I may integrate an informational external API or provide a few pre-configurations for such, since this has massive potential for your possible applications of Nucleus.
- Site search is only a box holding a position in the UI at the moment
- There are no known bugs or problems in the features which are currently integrated in the release version. Partial or buggy functionality will be kept in development branches and out of the releases as much as possible.
- The user profile, alerts and settings icons are only placeholders in the UI at the moment and will be wired into the user login/profile features when those are added.

A note about integrating 3rd party services. The ability for Nucleus to be stood up quickly and with minimal configuration is a very important feature so wherever I will integrate 3rd party services such as a backend data source API or an authentication service that powers user authentication, I will always make such features switchable in a clean manner, such that default behavior will be to use an internal, pre-configured solution. External integrations are necessary and powerful options, but I will build those in as options and keep default out-of-the-box behavior to be self-contained startup with data initialization right out of the repository as much as possible. Integrating external APIs is a big deal though, which is one reason I chose Apollo server, since it is a great way to "federate" or seamlessly combine many data sources, both internal and external, into your single stack API. Apollo also converts REST APIs into GraphQL APIs automatically, so Apollo is potentially a major player in your evolved Nucleus stack project.

----

## Getting Help

TODO: Write this section. These bullet points are only a rough outline.

- Contact information

TODO: This is boilerplate verbiage to customize:

If you have questions, concerns, bug reports, etc., please file an issue in this repository's Issue Tracker.

----

## Getting Involved

I am looking forward to hearing feedback from developers, operators and users so that I may better adapt this project to what everyone finds most valuable. I will do my best to assist folks as time allows. This will help me create good documentation and improved automation which can further enable people. This community-engagement is also very important for improving the smooth operation, stability, performance, compatability, ease of use and overall quality of the stack. Also, I really appreciate it when people tell me about great technologies I can incorporate or design patterns I can apply. I like to have a lot of diverse ideas and strategies as input to my projects, because that is what drives innovation and rapid progress.

At some point Nucleus will reach a complexity level where it should be modularized further into a plug-in architecture, so that the same ease of use is maintained, while allowing complexity and diverse options to be externalized cleanly into separate repositories and projects. I think that complexity is not far off. I'm interested in the ideas people have for what kinds of plug-in capabilities they would like to see. Perhaps there will be pluggable data layers for an easy choice between an SQL/REST architecture and GraphQL. A pluggable choice between Next.js React and traditional React seems needed which would mean a different kind of frontend site/application would be in place. A pluggable choice for the type of complete and running web application leads to pluggable models/schemas and pluggable dataset initialization into the data layers, and so on. These developments are coming soon so community involvement and a good Nucleus project culture will become important for Nucleus to thrive.

I will consider working with contributors or collaborating in various ways so please feel free to run your ideas by me but please do not share any proprietary information or business ideas you have until the context and setting may be appropriate for such. If you are a coder, frontend or backend developer or UI/UX designer working in advanced usage of the same technologies in the Nucleus Stack (or which you feel should be a part of Nucleus), then it would be good for us to touch base, for sure! Let's talk shop.

Thank you so much for your interest in The Nucleus Stack!

Jim Mannix

----
