(ns api.handler
  (:gen-class)
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.util.response :as response]
            [ring.adapter.jetty :as jetty]
            ))

(def products-list "[\"cheese\", \"milk\", \"butter\"]")

(defn products [request]
	(-> (response/response products-list)
		(response/header "Content-Type" "application/json")
		(response/header "Access-Control-Allow-Origin" "http://localhost:8080")))

(defroutes app-routes
  (GET "/products" [] products)
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))

 (defn -main [] 
     (let [port (read-string (or (System/getenv "PORT") "3000"))]
        (jetty/run-jetty #'app-routes {:port port, :join? false})))
