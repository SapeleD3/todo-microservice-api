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
