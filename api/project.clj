(defproject api "0.1.0-SNAPSHOT"
  :description "api for shopping cart"
  :url ""
  :min-lein-version "2.0.0"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [ring/ring-jetty-adapter "1.4.0"]]
  :plugins [[lein-ring "0.9.7"]]
  
  :profiles
  {:dev 
    {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}}

  :main api.handler
  :aot [api.handler]
  :uberjar-name "api-standalone.jar"
  :ring {:handler api.handler/app})
