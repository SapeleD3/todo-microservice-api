# Getting Started

- Step 1 :

```
cd payhippo
```

- Step 2 :

```
docker-compose up
```

- Step 3 on a new terminal window:

```
docker-compose exec {service-name} /bin/bash
```

- Step 4 in app#:

```
npm i
```

- Step 5 in app#:

```
npm run dev
```

# Services and Routes

- USER: Hosted = `https://users-tozs7pshfa-uc.a.run.app`

  service name: users

  [Service Repo](https://github.com/SapeleD3/todo-user-svc)

  Routes

  - register user: POST `/user/register`

    req.body = { email, password }

  - login: POST `/user/login`

    req.body = { email, password }

  - delete a user: DELETE `/:id`
  - get auth user details: GET `/user`

 <br />

# todo-microservice-api

a Nodejs and Express Microservice

- Build from container: `gcloud builds submit --tag gcr.io/PROJECT-ID/service-name`

# create a trigger on gcloud

`gcloud beta builds triggers create github --repo-name=SapeleD3/todo-notification-svc --repo-owner=sapeled3 --branch-pattern=develop --substitutions=\_PROJECT_ID=payhippo-todo --build-config=cloudbuild.yaml`

`gsutil mb gs://fortnaux/`

# Services links

- Notifications Service:
  `https://notifications-tozs7pshfa-uc.a.run.app`

# Resources/Reference

- How to deploy a Node API on Google Cloud Run `https://blog.logrocket.com/how-to-deploy-a-node-api-on-google-cloud-run/`
