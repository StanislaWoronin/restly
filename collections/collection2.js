{
  "info": {
    "_postman_id": "158b9c84-781f-4866-a61f-c5e62fa2c585",
    "name": "My Collection",
    "description": "### Welcome to Postman! This is your first collection. \n\nCollections are your starting point for building and testing APIs. You can use this one to:\n\n• Group related requests\n• Test your API in real-world scenarios\n• Document and share your requests\n\nUpdate the name and overview whenever you’re ready to make it yours.\n\n[Learn more about Postman Collections.](https://learning.postman.com/docs/collections/collections-overview/)",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "_exporter_id": "48081409",
    "_collection_link": "https://go.postman.co/collection/48081409-158b9c84-781f-4866-a61f-c5e62fa2c585?source=collection_link"
  },
  "item": [
    {
      "name": "APN63",
      "item": [
        {
          "name": "event_effectivity_mapping/search_modification",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiNTU1ZWJiMTctOWI4Ni00YTNjLTk4NzUtZTIzY2U0NmIzOGY1IiwicHJvdmlkZXIiOiJsb2NhbCIsInJvbGVzIjpbImt1cG9sX3VzZXIiLCJrdXBvbF9hZG1pbiJdLCJmdWxsTmFtZSI6Ikt1cG9sIEFkbWluIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMS0xN1QwNjo0NTo1Mi4zNTFaIiwiaWF0IjoxNzYzMzYxOTUyLCJleHAiOjE3NjM0MjE5NTJ9.bwLHSx-Zk2KIERvWAHhF9wz6REzZumeuBSeOc4MpBqo",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"psn\": 395721,\r\n    \"openAndNotAssignedModsOnly\": true,\r\n    \"showWholeRotableTree\": true,\r\n    \"limit\": 25,\r\n    \"offset\": 25,\r\n    \"search\": {\r\n        \"orderBy\": []\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/event_tracking/entities/event_effectivity_mapping/search_modification",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "event_effectivity_mapping",
                "search_modification"
              ]
            }
          },
          "response": []
        },
        {
          "name": "wo_transfer/search_edit_modifications",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"docNoI\": 31672,\r\n\t\"includeInactive\": false,\r\n\t\"isApplicable\": true,\r\n\t\"isHistory\": false,\r\n\t\"isPnChange\": true,\r\n\t\"limit\": 1000,\r\n\t\"offset\": 0,\r\n\t\"search\": {\r\n\t\t\"orderBy\": []\r\n\t}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/event_tracking/entities/wo_transfer/search_edit_modifications",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "wo_transfer",
                "search_edit_modifications"
              ]
            }
          },
          "response": []
        },
        {
          "name": "doc_replacement/update",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiY2ZjY2ViZGYtNjNjMi00ODIyLThhMjYtOTY3N2Q1MGEzMzA1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMC0wMlQwNzoxODo0MC41NTFaIiwiaWF0IjoxNzU5Mzg5NTIwLCJleHAiOjE3NTk0NDk1MjB9.mG614bPDA9SY5wObYEywRrh2JMSEnk2Gj31gqPL1ECc",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "\r\n{    \"data\": {\r\n       \"refDocnoI\": 9,\r\n       \"docnoI\": 9,\r\n       \"replacementCode\": \"CB\"\r\n   },\r\n   \"primaryKeys\": {\r\n       \"docnoI\": 9,\r\n       \"refDocnoI\": 35,\r\n       \"replacementCode\": \"C\"\r\n   }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/maintenance_program/entities/doc_replacement/update",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "maintenance_program",
                "entities",
                "doc_replacement",
                "update"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_effectivity_link/update_all",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiY2ZjY2ViZGYtNjNjMi00ODIyLThhMjYtOTY3N2Q1MGEzMzA1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0wOS0yNlQwNjo0MToyMi4xNDFaIiwiaWF0IjoxNzU4ODY4ODgyLCJleHAiOjE3NTg5Mjg4ODJ9.7P0JMc_noBA780LSMQqHUYkRXjhypkuO00g2hRohuhc",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"id\": \"c570e1c3-5301-4256-85be-52596b6312ed\",\r\n    \"statusCode\": 500,\r\n    \"requestId\": \"378ac088-3e48-ea94-0a2d-3f0a9daac7eb\",\r\n    \"message\": \"FATAL_ERROR\",\r\n    \"description\": \"Server error\",\r\n    \"timestamp\": \"2025-09-26T09:15:06.910Z\",\r\n    \"path\": \"/entities/kpl_mevt_header/search_initialisation\",\r\n    \"params\": [],\r\n    \"error\": \"подзапрос в выражении вернул больше одной строки\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/effectivity/entities/kpl_effectivity_link/update_all",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "effectivity",
                "entities",
                "kpl_effectivity_link",
                "update_all"
              ]
            }
          },
          "response": []
        },
        {
          "name": "doc_signoff_tree/find",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiY2ZjY2ViZGYtNjNjMi00ODIyLThhMjYtOTY3N2Q1MGEzMzA1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0wOS0yNVQwNzowNzoyOS4wMTZaIiwiaWF0IjoxNzU4Nzg0MDQ5LCJleHAiOjE3NTg4NDQwNDl9.Plv40xCmbij7l3vHZaAj9rkvENG-xHGQf_fD8MMQyjk",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"search\": {\r\n        \"find\": [\r\n            [\r\n                {\r\n                    \"name\": \"docnoI\",\r\n                    \"compare\": \"equal\",\r\n                    \"value\": [\r\n                        44634\r\n                    ]\r\n                },\r\n                {\r\n                    \"name\": \"refDocnoI\",\r\n                    \"compare\": \"equal\",\r\n                    \"value\": [\r\n                        44634\r\n                    ]\r\n                }\r\n            ]\r\n        ]\r\n    },\r\n    \"limit\": 1,\r\n    \"offset\": 0\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/maintenance_program/entities/doc_signoff_tree/find",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "maintenance_program",
                "entities",
                "doc_signoff_tree",
                "find"
              ]
            }
          },
          "response": []
        },
        {
          "name": "doc_header/warning",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiY2ZjY2ViZGYtNjNjMi00ODIyLThhMjYtOTY3N2Q1MGEzMzA1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0wOC0xOVQwNzowNDo0Ny4wMDlaIiwiaWF0IjoxNzU1NTg3MDg3LCJleHAiOjE3NTU2NDcwODd9.zrx9JXFw3CGYe8MIzxzuEd81TCz09Lm1V5EcStc5wfY",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\"docnoI\":44659\r\n}"
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/maintenance_program/entities/doc_header/warning",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "maintenance_program",
                "entities",
                "doc_header",
                "warning"
              ]
            }
          },
          "response": []
        },
        {
          "name": "doc_header/search",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"limit\": 25,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": [],\r\n        \"find\": [\r\n            [\r\n                {\r\n                    \"name\": \"docType\",\r\n                    \"compare\": \"equal\",\r\n                    \"value\": [\r\n                        \"AD\"\r\n                    ]\r\n                }\r\n            ]\r\n        ]\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/maintenance_program/entities/doc_header/search",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "maintenance_program",
                "entities",
                "doc_header",
                "search"
              ]
            }
          },
          "response": []
        },
        {
          "name": "doc_header/find",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": [\r\n            {\r\n                \"name\": \"docno\",\r\n                \"order\": \"asc\"\r\n            }\r\n        ],\r\n        \"find\": [\r\n            [\r\n                {\r\n                    \"name\": \"docno\",\r\n                    \"compare\": \"in\",\r\n                    \"value\": [\r\n                        \"A53P016-22\"\r\n                    ]\r\n                }\r\n            ]\r\n        ]\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/maintenance_program/entities/doc_header/find",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "maintenance_program",
                "entities",
                "doc_header",
                "find"
              ]
            }
          },
          "response": []
        },
        {
          "name": "event_template/delete",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiY2ZjY2ViZGYtNjNjMi00ODIyLThhMjYtOTY3N2Q1MGEzMzA1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0wOS0yNVQwNzowNzoyOS4wMTZaIiwiaWF0IjoxNzU4Nzg0MDQ5LCJleHAiOjE3NTg4NDQwNDl9.Plv40xCmbij7l3vHZaAj9rkvENG-xHGQf_fD8MMQyjk",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"primaryKeys\": {\r\n        \"templateRevisionnoI\": 145556\r\n    }\r\n}\r\n\r\n{\r\n\t\"cancellationReason\": \"R\",\r\n\t\"recdetailnoIs\": [\r\n\t\t5636278\r\n\t],\r\n\t\"userSign\": \"INSADMIN\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/maintenance_program/entities/event_template/delete",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "maintenance_program",
                "entities",
                "event_template",
                "delete"
              ]
            }
          },
          "response": []
        },
        {
          "name": "event_template/activate",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiY2ZjY2ViZGYtNjNjMi00ODIyLThhMjYtOTY3N2Q1MGEzMzA1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0wOS0yNVQwNzowNzoyOS4wMTZaIiwiaWF0IjoxNzU4Nzg0MDQ5LCJleHAiOjE3NTg4NDQwNDl9.Plv40xCmbij7l3vHZaAj9rkvENG-xHGQf_fD8MMQyjk",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\"templateRevisionnoI\":145556}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/maintenance_program/entities/event_template/deactivate",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "maintenance_program",
                "entities",
                "event_template",
                "deactivate"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_time_requirement_revision/search",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiY2ZjY2ViZGYtNjNjMi00ODIyLThhMjYtOTY3N2Q1MGEzMzA1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMC0yN1QwNjo0ODo0MS44MzdaIiwiaWF0IjoxNzYxNTQ3NzIxLCJleHAiOjE3NjE2MDc3MjF9.PD3NQ8DaAmevwmT33DsKJAP36E59e3gHhawZK5SbXuE",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"eventKey\": 20416664,\r\n\t\"eventType\": \"ME\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/time_requirement/entities/kpl_time_requirement_revision/search",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "time_requirement",
                "entities",
                "kpl_time_requirement_revision",
                "search"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_wo_event_link/initialise",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"initialise\": [\r\n        {\r\n            \"mevtHeadernoI\": 3297417,\r\n            \"reason\": \"Closed\",\r\n            \"eventStatus\": \"C\"\r\n        }\r\n    ]\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/event_tracking/entities/kpl_wo_event_link/initialise",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "kpl_wo_event_link",
                "initialise"
              ]
            }
          },
          "response": []
        },
        {
          "name": "wo_transfer/report_back",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"eventPerfnoI\": 23507762,\r\n    \"reportBack\": {\r\n        \"remarks\": \"PBPO\",\r\n        \"counters\": [\r\n            {\r\n                \"counternoI\": 6117538,\r\n                \"date\": \"2026-03-19\",\r\n                \"time\": \"11:36\"\r\n            },\r\n            {\r\n                \"counternoI\": 6117537,\r\n                \"dueAt\": 1200\r\n            },\r\n            {\r\n                \"counternoI\": 6117536,\r\n                \"dueAt\": 10\r\n            }\r\n        ],\r\n        \"reportBackDate\": {\r\n            \"date\": \"2026-03-19\",\r\n            \"time\": \"11:36\"\r\n        },\r\n        \"eventStatus\": \"V\"\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/wo_transfer/report_back",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "wo_transfer",
                "report_back"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_wo_event_link/delete_assignment",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiNTU1ZWJiMTctOWI4Ni00YTNjLTk4NzUtZTIzY2U0NmIzOGY1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMC0zMVQwNjo1NDoyNS4yOTBaIiwiaWF0IjoxNzYxODkzNjY1LCJleHAiOjE3NjE5NTM2NjV9.nutvSuCZ4l7-BT4PuGX7hYkKhOa4Y7Zzcd5sGzis9bw",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"acRegistr\": \"73137\",\r\n\t\"docnoI\": 44849\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/event_tracking/entities/kpl_wo_event_link/delete_assignment",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "kpl_wo_event_link",
                "delete_assignment"
              ]
            }
          },
          "response": []
        },
        {
          "name": "event_effectivity_mapping/recalculate",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\"docnoI\": 7413\r\n} ",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/event_effectivity_mapping/recalculate",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "event_effectivity_mapping",
                "recalculate"
              ]
            }
          },
          "response": []
        },
        {
          "name": "event_effectivity_mapping/search_modification",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"limit\": 25,\r\n\t\"offset\": 0,\r\n\t\"openAndNotAssignedModsOnly\": false,\r\n\t\"psn\": 193492,\r\n\t\"search\": {\r\n\t\t\"orderBy\": []\r\n\t},\r\n\t\"showWholeRotableTree\": false\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/event_tracking/entities/event_effectivity_mapping/search_modification",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "event_effectivity_mapping",
                "search_modification"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_requirement_link/get_doc_header_effectivity_links",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiNTU1ZWJiMTctOWI4Ni00YTNjLTk4NzUtZTIzY2U0NmIzOGY1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMC0zMFQwNzozNzoxMy45MjFaIiwiaWF0IjoxNzYxODA5ODMzLCJleHAiOjE3NjE4Njk4MzN9.pJvdWpl2KuXRX1nfvu3d0CzfDOHhkrSWjZ4BMzpVYpY",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"effectivityLinknoI\": 4,\r\n\t\"search\": {}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/maintenance_program/entities/kpl_requirement_link/get_doc_header_effectivity_links",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "maintenance_program",
                "entities",
                "kpl_requirement_link",
                "get_doc_header_effectivity_links"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_time_requirement_revision/update_thresholds",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiY2ZjY2ViZGYtNjNjMi00ODIyLThhMjYtOTY3N2Q1MGEzMzA1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMS0xOFQwNjo0MDowNi4wMjRaIiwiaWF0IjoxNzYzNDQ4MDA2LCJleHAiOjE3NjM1MDgwMDZ9.YGhdjCXeJhTJe6sHtPgoYXi1DnFP8TfSty94SQBi-iI",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{    \"createThresholds\": {        \"calculationLogic\": \"L\",\r\n       \"createThresholds\": [],\r\n       \"deleteThresholds\": [],\r\n       \"isUnlimited\": false,\r\n       \"notes\": \" \",\r\n       \"updateThresholds\": [\r\n           {\r\n               \"accuracy\": \"D\",\r\n               \"amountInterval\": 18,\r\n               \"baseline\": {\r\n                   \"basedOn\": \"M\"\r\n               },\r\n               \"counterDefnoI\": 3,\r\n               \"dimensionType\": \"W\",\r\n               \"intervalnoI\": 237776,\r\n               \"unit\": \"D\"\r\n           },\r\n           {\r\n               \"amountInterval\": 0,\r\n               \"baseline\": {\r\n                   \"basedOn\": \"M\"\r\n               },\r\n               \"counterDefnoI\": 1,\r\n               \"dimensionType\": \"W\",\r\n               \"intervalnoI\": 237777\r\n           }\r\n       ]\r\n   },\r\n   \"intervalGroupnoI\": 167682,\r\n   \"timeRequirementRevisionnoI\": 134169\r\n}\r\n",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/time_requirement/entities/kpl_time_requirement_revision/update_thresholds",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "time_requirement",
                "entities",
                "kpl_time_requirement_revision",
                "update_thresholds"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_time_requirement_revision/get",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiY2ZjY2ViZGYtNjNjMi00ODIyLThhMjYtOTY3N2Q1MGEzMzA1IiwicHJvdmlkZXIiOiJsb2NhbCIsInJvbGVzIjpbImt1cG9sX3VzZXIiLCJrdXBvbF9hZG1pbiJdLCJmdWxsTmFtZSI6Ikt1cG9sIEFkbWluIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMi0wMVQwODoxMDo0MC42ODBaIiwiaWF0IjoxNzY0NTc2NjQwLCJleHAiOjE3NjQ2MzY2NDB9.5CEEkgMJfsUZIpCXLd4_tjuXPM4IiP-pugLFJ_DrWEE",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\"primaryKeys\": {\r\n \"timeRequirementRevisionnoI\": 143532\r\n},\r\n\"relations\": {\r\n \"kplTimeRequirement\": true,\r\n \"treqIntervalGroup\": {\r\n  \"treqDimensionGroups\": {\r\n   \"treqIntervals\": {\r\n    \"counterDefnoI2\": true,\r\n    \"treqBaselines\": {\r\n        \"treqBaselineThresholds\": true\r\n    }\r\n   }\r\n  }\r\n }\r\n}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/time_requirement/entities/kpl_time_requirement_revision/get",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "time_requirement",
                "entities",
                "kpl_time_requirement_revision",
                "get"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN1895",
      "item": [
        {
          "name": "kpl_wo_event_link/search_events",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"component\": {\r\n        \"partno\": [\r\n            \"3-1530\"\r\n        ],\r\n        \"serialno\": [\r\n            \"8580\"\r\n        ],\r\n        \"installedParts\": false,\r\n        \"notInstalledParts\": false\r\n    },\r\n    \"partReq\": {\r\n        \"removalReq\": false,\r\n        \"onWing\": false\r\n    },\r\n    \"maintenanceEvent\": {\r\n        \"onlyClosed\": false,\r\n        \"onlyPlannable\": false,\r\n        \"onlyNotInForecast\": false,\r\n        \"onlyExtended\": false,\r\n        \"onlyAutoReportBack\": false,\r\n        \"onlyForecastErrorsOrWarnings\": false,\r\n        \"initialised\": false,\r\n        \"notInitiliased\": true,\r\n        \"currentEvents\": true,\r\n        \"futureEvents\": false,\r\n        \"historyEvents\": false\r\n    },\r\n    \"limit\": 25,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": []\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/kpl_wo_event_link/search_events",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "kpl_wo_event_link",
                "search_events"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_wo_event_link/preview_initialise",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n  \"mevtHeadernoI\": 1103995,\r\n            \"initialiseStrategy\": \"AC\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/kpl_wo_event_link/preview_initialise",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "kpl_wo_event_link",
                "preview_initialise"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_mevt_header/search_sync_mp_revision",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"maintenanceEvent\": {\r\n        \"onlyClosed\": false,\r\n        \"onlyPlannable\": false,\r\n        \"onlyNotInForecast\": false,\r\n        \"onlyExtended\": false,\r\n        \"onlyAutoReportBack\": false,\r\n        \"onlyForecastErrorsOrWarnings\": false,\r\n        \"initialised\": false,\r\n        \"notInitiliased\": true\r\n    },\r\n    \"aircraft\": {\r\n        \"acRegistr\": [\r\n            \"73160\"\r\n        ]\r\n    },\r\n    \"taskcards\": {\r\n        \"taskcardType\": [\r\n            \"B\",\r\n            \"O\",\r\n            \"S\"\r\n        ],\r\n        \"revisedTaskcards\": false\r\n    },\r\n    \"limit\": 25,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": []\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/kpl_mevt_header/search_sync_mp_revision",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "kpl_mevt_header",
                "search_sync_mp_revision"
              ]
            }
          },
          "response": []
        },
        {
          "name": "forecast/calculate",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"eventPerfnoIs\": [\r\n        20727123\r\n    ]\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/work_package/entities/forecast/calculate",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "work_package",
                "entities",
                "forecast",
                "calculate"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_wo_event_link/is_terminate_event_available",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"eventPerfnoI\": 23471342\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/kpl_wo_event_link/is_terminate_event_available",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "kpl_wo_event_link",
                "is_terminate_event_available"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_mevt_header/search_initialisation",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"maintenanceEvent\": {\r\n        \"onlyClosed\": false,\r\n        \"onlyPlannable\": false,\r\n        \"onlyNotInForecast\": false,\r\n        \"onlyExtended\": false,\r\n        \"onlyAutoReportBack\": false,\r\n        \"onlyForecastErrorsOrWarnings\": false,\r\n        \"initialised\": false,\r\n        \"notInitiliased\": true\r\n    },\r\n    \"component\": {\r\n        \"partno\": [\r\n            \"3-1530\"\r\n        ],\r\n        \"serialno\": [\r\n            \"A1463-1\"\r\n        ],\r\n        \"installedParts\": false,\r\n        \"notInstalledParts\": false\r\n    },\r\n    \"partReq\": {\r\n        \"removalReq\": false,\r\n        \"onWing\": false\r\n    },\r\n    \"limit\": 25,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": []\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/kpl_mevt_header/search_initialisation",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "kpl_mevt_header",
                "search_initialisation"
              ]
            }
          },
          "response": []
        },
        {
          "name": "wo_transfer/search_edit_modifications",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiNTU1ZWJiMTctOWI4Ni00YTNjLTk4NzUtZTIzY2U0NmIzOGY1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMC0wN1QwNjo0NDozNC4xMThaIiwiaWF0IjoxNzU5ODE5NDc0LCJleHAiOjE3NTk4Nzk0NzR9.fFxR6PeN4Kn7Q3s7BE7QNeAnmvUJmO_kJZxmZ1sZXjQ",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"docNoI\": 46792,\r\n\t\"includeInactive\": true,\r\n\t\"isApplicable\": true,\r\n\t\"isHistory\": true,\r\n\t\"isPnChange\": true,\r\n\t\"limit\": 1000,\r\n\t\"offset\": 0,\r\n\t\"search\": {\r\n\t\t\"orderBy\": []\r\n\t}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/event_tracking/entities/wo_transfer/search_edit_modifications",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "wo_transfer",
                "search_edit_modifications"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_wo_event_link/initialise_replacement_event",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiY2ZjY2ViZGYtNjNjMi00ODIyLThhMjYtOTY3N2Q1MGEzMzA1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0wOS0yNlQwNjo0MToyMi4xNDFaIiwiaWF0IjoxNzU4ODY4ODgyLCJleHAiOjE3NTg5Mjg4ODJ9.7P0JMc_noBA780LSMQqHUYkRXjhypkuO00g2hRohuhc",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"initialise\": [\r\n        {\r\n            \"mevtHeadernoI\": 11675,\r\n            \"eventStatus\": \"O\"\r\n        }\r\n    ]\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/kpl_wo_event_link/initialise_replacement_event",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "kpl_wo_event_link",
                "initialise_replacement_event"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_mevt_header/get_applicable_counters",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"mevtHeadernoI\":2858008 //D 933169 \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/event_tracking/entities/kpl_mevt_header/get_applicable_counters",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "kpl_mevt_header",
                "get_applicable_counters"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_wo_event_link/initialise",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"initialise\": [\r\n        {\r\n            \"mevtHeadernoI\": 3433612,\r\n            \"reason\": \"rpnd\",\r\n            \"eventStatus\": \"Y\"\r\n        }\r\n    ]\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/kpl_wo_event_link/initialise",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "kpl_wo_event_link",
                "initialise"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_time_requirement_revision/search_individualized",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"eventPerfnoI\": 20489460,\r\n    \"limit\": 25,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": []\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/time_requirement/entities/kpl_time_requirement_revision/search_individualized",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "time_requirement",
                "entities",
                "kpl_time_requirement_revision",
                "search_individualized"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_wo_event_link/deassign",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiNTU1ZWJiMTctOWI4Ni00YTNjLTk4NzUtZTIzY2U0NmIzOGY1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0wOS0xMFQwNjo1Mjo1OS4wMjBaIiwiaWF0IjoxNzU3NDg3MTc5LCJleHAiOjE3NTc1NDcxNzl9.ssd7bvlgnTD-7lphuiUuslBfc3sz2DP3bpOc4UlpOKM",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"events\": [\r\n        {\r\n            \"eventPerfnoI\": 11247204,\r\n            \"deleteWorkorder\": true\r\n        }\r\n    ],\r\n    \"dropHistory\": false\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/event_tracking/entities/kpl_wo_event_link/deassign",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "kpl_wo_event_link",
                "deassign"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_wo_event_link/sync_time_requirement",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"eventPerfnoI\": 19317108\r\n}     \r\n    \r\n",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/event_tracking/entities/kpl_wo_event_link/sync_time_requirement",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "kpl_wo_event_link",
                "sync_time_requirement"
              ]
            }
          },
          "response": []
        },
        {
          "name": "wo_transfer/change_next_due",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiY2ZjY2ViZGYtNjNjMi00ODIyLThhMjYtOTY3N2Q1MGEzMzA1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0wOS0xN1QwNjo0NzozOS45MzJaIiwiaWF0IjoxNzU4MDkxNjU5LCJleHAiOjE3NTgxNTE2NTl9.7JlCNzzfD5HJUTRZy6WUAH6_JrA8r51UcwjKiHUZjRA",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"eventPerfnoI\": 10950279,\r\n\t\"counters\": [\r\n\t\t{\r\n\t\t\t\"counternoI\": 165,\r\n\t\t\t\"dueAt\": 21000\r\n\t\t}\r\n\t],\r\n\t\"setPreset\": false\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/wo_transfer/change_next_due",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "wo_transfer",
                "change_next_due"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_wo_event_link/search_deassign_events",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"eventPerfnoIs\": [\r\n\t\t12138603\r\n\t],\r\n\t\"limit\": 25,\r\n\t\"offset\": 0,\r\n\t\"search\": {\r\n\t\t\"orderBy\": [\r\n\t\t\t{\r\n\t\t\t\t\"name\": \"hasWorkorder\",\r\n\t\t\t\t\"order\": \"desc\"\r\n\t\t\t}\r\n\t\t]\r\n\t}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/kpl_wo_event_link/search_deassign_events",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "kpl_wo_event_link",
                "search_deassign_events"
              ]
            }
          },
          "response": []
        },
        {
          "name": "mevt_preset/set_preset",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "\r\n\r\n\"allowedOptions\": {\r\n                \"A\": true,\r\n                \"L\": true,\r\n                \"N\": true,\r\n                \"P\": true,\r\n                \"E\": true,\r\n                \"D\": true,\r\n                \"S\": true\r\n            }\r\n\r\n            ",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/mevt_preset/set_preset",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "mevt_preset",
                "set_preset"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN280",
      "item": [
        {
          "name": "wo_transfer/report_back",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"eventPerfnoI\": 22893174,\r\n    \"performedData\": {}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/wo_transfer/report_back",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "wo_transfer",
                "report_back"
              ]
            }
          },
          "response": []
        },
        {
          "name": "ac_utilization/find",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"eventPerfnoI\": 22893174,\r\n    \"performedData\": {}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/wo_transfer/report_back",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "wo_transfer",
                "report_back"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_wo_event_link/check_buttons",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"eventPerfnoIs\": [\r\n        19832005,19847094\r\n    ]\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/event_tracking/entities/kpl_wo_event_link/check_buttons",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "kpl_wo_event_link",
                "check_buttons"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_wo_event_link/terminate",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"eventPerfnoI\": 19832007\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/kpl_wo_event_link/terminate",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "kpl_wo_event_link",
                "terminate"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_wo_event_link/search_terminate_events",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"eventPerfnoIs\": [\r\n        23519731,23520921\r\n    ],\r\n    \"limit\": 100,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": []\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/kpl_wo_event_link/search_terminate_events",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "kpl_wo_event_link",
                "search_terminate_events"
              ]
            }
          },
          "response": []
        },
        {
          "name": "wo_transfer_dimension/get_performed_value",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"eventPerfnoI\": 20077065,\r\n    \"counters\": [\r\n        {\r\n            \"counternoI\": 3692710,\r\n            \"date\": \"2026-02-13\",\r\n            \"time\": \"13:23\"\r\n        },\r\n        {\r\n            \"counternoI\": 3692709,\r\n            \"dueAt\": 651020\r\n        },\r\n        {\r\n            \"counternoI\": 3692708,\r\n            \"dueAt\": 1537\r\n        }\r\n    ],\r\n    \"performedDateDto\": {\r\n        \"date\": \"2026-02-13\",\r\n        \"time\": \"13:23\"\r\n    },\r\n    \"limit\": 25,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": []\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/wo_transfer_dimension/get_performed_value",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "wo_transfer_dimension",
                "get_performed_value"
              ]
            }
          },
          "response": []
        },
        {
          "name": "wo_transfer/get_report_back_counters",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"eventPerfnoI\": 20077065,\r\n    \"reportBackDate\": {\r\n        \"date\": \"2024-10-07\",\r\n        \"time\": \"13:23\"\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/wo_transfer/get_report_back_counters",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "wo_transfer",
                "get_report_back_counters"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN2773",
      "item": [
        {
          "name": "part_requirement/part_req_administration_search",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiY2ZjY2ViZGYtNjNjMi00ODIyLThhMjYtOTY3N2Q1MGEzMzA1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0wOS0xNlQwOToyMDowNS42OTZaIiwiaWF0IjoxNzU4MDE0NDA1LCJleHAiOjE3NTgwNzQ0MDV9.aA3xCuPpDU6ZR09zhTUBnSxAGBBtmpdwSC0Uo49tK2g",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"meta\": {\r\n        \"searchableFields\": {}\r\n    },\r\n    \"data\": {\r\n        \"assignStatus\": null,\r\n        \"forecastPreview\": null,\r\n        \"initialise\": {\r\n            \"eventPerfnoIs\": [\r\n                23463557\r\n            ]\r\n        }\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/part_requirement/part_req_administration_search",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "part_requirement",
                "part_req_administration_search"
              ]
            }
          },
          "response": []
        },
        {
          "name": "part/get_part_requirements",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiY2ZjY2ViZGYtNjNjMi00ODIyLThhMjYtOTY3N2Q1MGEzMzA1IiwicHJvdmlkZXIiOiJsb2NhbCIsInJvbGVzIjpbImt1cG9sX3VzZXIiLCJrdXBvbF9hZG1pbiJdLCJmdWxsTmFtZSI6Ikt1cG9sIEFkbWluIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMS0yMFQwOToyNzoxNi44OTZaIiwiaWF0IjoxNzYzNjMwODM2LCJleHAiOjE3NjM2OTA4MzZ9.Rh4g8TmYIS_MZ5aUJA5qvooQTM6r8-SmLaUkU0LauLM",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"partseqnoI\":25789,\r\n    \"search\": {}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/parts/entities/part/get_part_requirements",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "part",
                "get_part_requirements"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN2293",
      "item": [
        {
          "name": "rotables/get_inspection_tree",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"psn\": 1295772,\r\n    \"inspectionDetailnoI\": 1441946,\r\n    \"confConfignoI\": 2206\r\n}\r\n/*\r\n{   \r\n    \"confConfignoI\":\t2725,\r\n\t\"inspectionDetailnoI\": 1445130,\r\n\t\"psn\": 1660061//5616710\r\n}\r\n*/",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/parts/entities/rotables/get_inspection_tree",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "rotables",
                "get_inspection_tree"
              ]
            }
          },
          "response": []
        },
        {
          "name": "rotables/inspection_search",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"rotablesType\": \"Internal\",\r\n    \"partno\": \"62771-128\",\r\n    \"serialno\": \"M10184\",\r\n    \"limit\": 25,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": []\r\n    }\r\n}\r\n/*\r\n{   \r\n    \"confConfignoI\":\t2725,\r\n\t\"inspectionDetailnoI\": 1445130,\r\n\t\"psn\": 1660061//5616710\r\n}\r\n*/",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/parts/entities/rotables/inspection_search",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "rotables",
                "inspection_search"
              ]
            }
          },
          "response": []
        },
        {
          "name": "certificate/search",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"sources\": [\r\n        {\r\n            \"sourceKey\": 702916,\r\n            \"sourceType\": \"RO\"\r\n        }\r\n    ],\r\n    \"limit\": 25,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": []\r\n    }\r\n}\r\n\r\n",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-trash.ecias.ru/api/address_administration/entities/certificate/search",
              "protocol": "https",
              "host": [
                "kupol-trash",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "address_administration",
                "entities",
                "certificate",
                "search"
              ]
            }
          },
          "response": []
        },
        {
          "name": "rotables/get_functional_positions",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"confConfignoI\": 2212,\r\n\t\"psn\": [\r\n\t\t342653\r\n\t]\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/parts/entities/rotables/get_functional_positions",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "rotables",
                "get_functional_positions"
              ]
            }
          },
          "response": []
        },
        {
          "name": "part/search_by_config",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"confConfignoI\": 2212,\r\n\t\"psn\": [\r\n\t\t342653\r\n\t]\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/parts/entities/rotables/get_functional_positions",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "rotables",
                "get_functional_positions"
              ]
            }
          },
          "response": []
        },
        {
          "name": "rotables/find_functional_positions",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"psn\": 5617062,\r\n    \"parentConfConfignoI\": 2733,\r\n    \"limit\": 25,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": []\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/parts/entities/rotables/find_functional_positions",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "rotables",
                "find_functional_positions"
              ]
            }
          },
          "response": []
        },
        {
          "name": "rotables/get_inspection_card",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"psn\": 229466,\r\n    \"inspectionDetailnoI\": 1416740\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/parts/entities/rotables/get_inspection_card",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "rotables",
                "get_inspection_card"
              ]
            }
          },
          "response": []
        },
        {
          "name": "rotables/finish_inspection",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"psn\": 1259341,\r\n    \"inspectionDetailnoI\": 1469766\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/parts/entities/rotables/finish_inspection",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "rotables",
                "finish_inspection"
              ]
            }
          },
          "response": []
        },
        {
          "name": "certificate/search",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"sources\": [\r\n        {\r\n            \"sourceKey\": 7748292,\r\n            \"sourceType\": \"RD\"\r\n        }\r\n    ],\r\n    \"limit\": 25,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": []\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/address_administration/entities/certificate/search",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "address_administration",
                "entities",
                "certificate",
                "search"
              ]
            }
          },
          "response": []
        },
        {
          "name": "od_detail/get_repair_details",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiNTU1ZWJiMTctOWI4Ni00YTNjLTk4NzUtZTIzY2U0NmIzOGY1IiwicHJvdmlkZXIiOiJsb2NhbCIsInJvbGVzIjpbImt1cG9sX3VzZXIiLCJrdXBvbF9hZG1pbiJdLCJmdWxsTmFtZSI6Ikt1cG9sIEFkbWluIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMS0xN1QwNjo0NTo1Mi4zNTFaIiwiaWF0IjoxNzYzMzYxOTUyLCJleHAiOjE3NjM0MjE5NTJ9.bwLHSx-Zk2KIERvWAHhF9wz6REzZumeuBSeOc4MpBqo",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"orderno\": \"P5518219\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru//api/order_management/entities/od_detail/get_repair_details",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "",
                "api",
                "order_management",
                "entities",
                "od_detail",
                "get_repair_details"
              ]
            }
          },
          "response": []
        },
        {
          "name": "mevt_preset/get_for_component",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"meta\": {\r\n        \"searchableFields\": {}\r\n    },\r\n    \"data\": {\r\n        \"componentPreset\": {\r\n            \"mevtHeadernoI\": 3299302,\r\n            \"neverPerformed\": false,\r\n            \"counters\": [\r\n                {\r\n                    \"code\": \"C\",\r\n                    \"name\": \"Flight Cycles\",\r\n                    \"lifeValue\": 0,\r\n                    \"counternoI\": 6522485,\r\n                    \"displayUnit\": \"INT_0\",\r\n                    \"intervalValue\": 1500,\r\n                    \"dueAt\": 1500,\r\n                    \"performedAt\": 0,\r\n                    \"sinceRequirement\": 0\r\n                },\r\n                {\r\n                    \"code\": \"D\",\r\n                    \"name\": \"Calendar Days\",\r\n                    \"lifeValue\": 28656406,\r\n                    \"counternoI\": 6522487,\r\n                    \"displayUnit\": \"TIME_CAL\",\r\n                    \"intervalValue\": null,\r\n                    \"dueAt\": null,\r\n                    \"performedAt\": null,\r\n                    \"sinceRequirement\": null\r\n                },\r\n                {\r\n                    \"code\": \"H\",\r\n                    \"name\": \"Flight Hours\",\r\n                    \"lifeValue\": 0,\r\n                    \"counternoI\": 6522486,\r\n                    \"displayUnit\": \"TIME_AMO\",\r\n                    \"intervalValue\": null,\r\n                    \"dueAt\": null,\r\n                    \"performedAt\": null,\r\n                    \"sinceRequirement\": null\r\n                },\r\n                {\r\n                    \"code\": \"SD\",\r\n                    \"name\": \"Storage Days\",\r\n                    \"lifeValue\": 267840,\r\n                    \"counternoI\": 6522484,\r\n                    \"displayUnit\": \"TIME_CAL\",\r\n                    \"intervalValue\": null,\r\n                    \"dueAt\": null,\r\n                    \"performedAt\": null,\r\n                    \"sinceRequirement\": null\r\n                }\r\n            ]\r\n        },\r\n        \"partRequirementEffectivities\": [\r\n            {\r\n                \"event\": \"OH(OVERHAUL) 3-1578-1 OVERHAUL\",\r\n                \"effectivity\": \"3-1678-1 All\",\r\n                \"mevtHeadernoI\": 3299302,\r\n                \"toGo\": 1500,\r\n                \"expectedDate\": \"6055-01-22\",\r\n                \"code\": \"C\",\r\n                \"counternoI\": 6522485,\r\n                \"dueAt\": 1500,\r\n                \"treqIntervalGroupnoI\": 167793,\r\n                \"treqDimensionGroupnoI\": 118946,\r\n                \"firstLater\": null,\r\n                \"treqIntervalnoI\": 238288,\r\n                \"intervalPrefix\": \"W\",\r\n                \"intervalUnit\": \"D\",\r\n                \"intervalValue\": 1500,\r\n                \"refType\": \"RO\",\r\n                \"counterDefnoI\": 2,\r\n                \"name\": \"Flight Cycles\",\r\n                \"displayUnit\": \"INT_0\",\r\n                \"sinceRequirement\": 0\r\n            },\r\n            {\r\n                \"effectivity\": \"3-1678-1 All\",\r\n                \"event\": \"Flight Cycles\",\r\n                \"mevtHeadernoI\": 3299302,\r\n                \"toGo\": 1500,\r\n                \"expectedDate\": \"6055-01-22\",\r\n                \"code\": \"C\",\r\n                \"counternoI\": 6522485,\r\n                \"dueAt\": 1500,\r\n                \"treqIntervalGroupnoI\": 167793,\r\n                \"treqDimensionGroupnoI\": 118946,\r\n                \"firstLater\": null,\r\n                \"treqIntervalnoI\": 238288,\r\n                \"intervalPrefix\": \"W\",\r\n                \"intervalUnit\": \"D\",\r\n                \"intervalValue\": 1500,\r\n                \"refType\": \"RO\",\r\n                \"counterDefnoI\": 2,\r\n                \"name\": \"Flight Cycles\",\r\n                \"displayUnit\": \"INT_0\",\r\n                \"sinceRequirement\": 0\r\n            }\r\n        ]\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/mevt_preset/get_for_component",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "mevt_preset",
                "get_for_component"
              ]
            }
          },
          "response": []
        },
        {
          "name": "part/get_configurations",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"partseqnoI\": 66145,\r\n    \"psn\": 5617060,\r\n    \"limit\": 25,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": [],\r\n        \"find\": [\r\n            [\r\n                {\r\n                    \"name\": \"name\",\r\n                    \"compare\": \"not_in\",\r\n                    \"value\": [\r\n                        \"NO CONF\"\r\n                    ]\r\n                }\r\n            ]\r\n        ]\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/parts/entities/part/get_configurations",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "part",
                "get_configurations"
              ]
            }
          },
          "response": []
        },
        {
          "name": "mevt_preset/save_for_component",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"inspectionDetailnoI\": 1424784,\r\n    \"mevtHeadernoI\": 82423,\r\n    \"neverPerformed\": false,\r\n    \"counters\": [\r\n        {\r\n            \"counternoI\": 1125080,\r\n            \"valueType\": \"N\",\r\n            \"value\": 0\r\n        },\r\n        {\r\n            \"counternoI\": 2790853,\r\n            \"valueType\": \"N\",\r\n            \"value\": 0\r\n        },\r\n        {\r\n            \"counternoI\": 1125079,\r\n            \"valueType\": \"N\",\r\n            \"value\": 0\r\n        },\r\n        {\r\n            \"counternoI\": 1125078,\r\n            \"valueType\": \"L\",\r\n            \"value\": 28571040\r\n        }\r\n    ]\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/event_tracking/entities/mevt_preset/save_for_component",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "mevt_preset",
                "save_for_component"
              ]
            }
          },
          "response": []
        },
        {
          "name": "part/get_part_requirements",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "      {\r\n      \t\"partseqnoI\": 5389,\r\n      \t\"search\": {}\r\n      }",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://ramasis-dev.ecias.ru/api/parts/entities/part/get_part_requirements",
              "protocol": "https",
              "host": [
                "ramasis-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "part",
                "get_part_requirements"
              ]
            }
          },
          "response": []
        },
        {
          "name": "rotables/inspection_save_main",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"inspectionDetailnoI\": 1461672,\r\n    \"psn\": 154976,\r\n    \"confConfignoI\": null,\r\n    \"partno\": \"D68100-1\",\r\n    \"serialno\": \"11EM058777001\",\r\n    \"bookingText\": \"\",\r\n    \"condition\": \"MD\",\r\n    \"parentPsn\": 217777,\r\n    \"parentConfConfignoI\": null,\r\n    \"confFpnoI\": null,\r\n    \"oldCounters\": [\r\n        {\r\n            \"counterDefnoI\": 103,\r\n            \"isUnknown\": false,\r\n            \"lifeValue\": 28560960\r\n        },\r\n        {\r\n            \"counterDefnoI\": 3,\r\n            \"counternoI\": 466326,\r\n            \"lifeValue\": 7231680,\r\n            \"isUnknown\": false\r\n        },\r\n        {\r\n            \"counterDefnoI\": 1,\r\n            \"counternoI\": 466327,\r\n            \"lifeValue\": 2764642,\r\n            \"isUnknown\": false\r\n        },\r\n        {\r\n            \"counterDefnoI\": 2,\r\n            \"counternoI\": 466328,\r\n            \"lifeValue\": 6687,\r\n            \"isUnknown\": false\r\n        }\r\n    ],\r\n    \"counters\": [\r\n        {\r\n            \"counterDefnoI\": 103,\r\n            \"isUnknown\": false,\r\n            \"lifeValue\": 28560960\r\n        },\r\n        {\r\n            \"counterDefnoI\": 3,\r\n            \"isUnknown\": false,\r\n            \"lifeValue\": 21329280,\r\n            \"counternoI\": 466326\r\n        },\r\n        {\r\n            \"counterDefnoI\": 1,\r\n            \"isUnknown\": false,\r\n            \"lifeValue\": 2764642,\r\n            \"counternoI\": 466327\r\n        },\r\n        {\r\n            \"counterDefnoI\": 2,\r\n            \"isUnknown\": false,\r\n            \"lifeValue\": 6687,\r\n            \"counternoI\": 466328\r\n        }\r\n    ]\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/parts/entities/rotables/inspection_save_main",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "rotables",
                "inspection_save_main"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Time Req",
      "item": [
        {
          "name": "kpl_time_requirement_revision/search",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiY2ZjY2ViZGYtNjNjMi00ODIyLThhMjYtOTY3N2Q1MGEzMzA1IiwicHJvdmlkZXIiOiJsb2NhbCIsInJvbGVzIjpbImt1cG9sX3VzZXIiLCJrdXBvbF9hZG1pbiJdLCJmdWxsTmFtZSI6Ikt1cG9sIEFkbWluIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMi0wMVQwODoxMDo0MC42ODBaIiwiaWF0IjoxNzY0NTc2NjQwLCJleHAiOjE3NjQ2MzY2NDB9.5CEEkgMJfsUZIpCXLd4_tjuXPM4IiP-pugLFJ_DrWEE",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\"primaryKeys\": {\r\n \"timeRequirementRevisionnoI\": 143532\r\n},\r\n\"relations\": {\r\n \"kplTimeRequirement\": true,\r\n \"treqIntervalGroup\": {\r\n  \"treqDimensionGroups\": {\r\n   \"treqIntervals\": {\r\n    \"counterDefnoI2\": true,\r\n    \"treqBaselines\": {\r\n        \"treqBaselineThresholds\": true\r\n    }\r\n   }\r\n  }\r\n }\r\n}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/time_requirement/entities/kpl_time_requirement_revision/get",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "time_requirement",
                "entities",
                "kpl_time_requirement_revision",
                "get"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_time_requirement/wizard_create",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiNTU1ZWJiMTctOWI4Ni00YTNjLTk4NzUtZTIzY2U0NmIzOGY1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMC0yOVQwNjozMDoyNy4wNTNaIiwiaWF0IjoxNzYxNzE5NDI3LCJleHAiOjE3NjE3Nzk0Mjd9.k9T8DktcvPtY6IqWBv_oh4sisstwHgD6DrJqg0xvYq4",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"additionalInfo\": {\r\n\t\t\"eventKey\": 23471487,\r\n\t\t\"eventType\": \"ME\"\r\n\t},\r\n\t\"header\": {\r\n\t\t\"autoReportback\": false,\r\n\t\t\"description\": \"\",\r\n\t\t\"title\": \"\"\r\n\t},\r\n\t\"intervals\": {\r\n\t\t\"calculationLogic\": \"F\",\r\n\t\t\"createIntervals\": [\r\n\t\t\t{\r\n\t\t\t\t\"accuracy\": \"F\",\r\n\t\t\t\t\"amountInterval\": 50,\r\n\t\t\t\t\"counterDefnoI\": 3,\r\n\t\t\t\t\"unit\": \"D\"\r\n\t\t\t}\r\n\t\t],\r\n\t\t\"isUnlimited\": false,\r\n\t\t\"nextDueRuleId\": -1\r\n\t},\r\n\t\"thresholds\": {\r\n\t\t\"calculationLogic\": \"F\",\r\n\t\t\"createThresholds\": [\r\n\t\t\t{\r\n\t\t\t\t\"accuracy\": \"F\",\r\n\t\t\t\t\"amountInterval\": 100,\r\n\t\t\t\t\"baseline\": {\r\n\t\t\t\t\t\"basedOn\": \"M\"\r\n\t\t\t\t},\r\n\t\t\t\t\"counterDefnoI\": 3,\r\n\t\t\t\t\"dimensionType\": \"W\",\r\n\t\t\t\t\"unit\": \"D\"\r\n\t\t\t}\r\n\t\t],\r\n\t\t\"isUnlimited\": false\r\n\t}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/time_requirement/entities/kpl_time_requirement/wizard_create",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "time_requirement",
                "entities",
                "kpl_time_requirement",
                "wizard_create"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_wo_event_link/sync_time_requirement",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiNTU1ZWJiMTctOWI4Ni00YTNjLTk4NzUtZTIzY2U0NmIzOGY1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMC0yOVQwNjozMDoyNy4wNTNaIiwiaWF0IjoxNzYxNzE5NDI3LCJleHAiOjE3NjE3Nzk0Mjd9.k9T8DktcvPtY6IqWBv_oh4sisstwHgD6DrJqg0xvYq4",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "        {\r\n            \"eventPerfnoI\": 23463860            \r\n        }\r\n",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/event_tracking/entities/kpl_wo_event_link/sync_time_requirement",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "event_tracking",
                "entities",
                "kpl_wo_event_link",
                "sync_time_requirement"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN2015",
      "item": [
        {
          "name": "od_detail/get_card",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiNTU1ZWJiMTctOWI4Ni00YTNjLTk4NzUtZTIzY2U0NmIzOGY1IiwicHJvdmlkZXIiOiJsb2NhbCIsInJvbGVzIjpbImt1cG9sX3VzZXIiLCJrdXBvbF9hZG1pbiJdLCJmdWxsTmFtZSI6Ikt1cG9sIEFkbWluIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMS0xN1QwNjo0NTo1Mi4zNTFaIiwiaWF0IjoxNzYzMzYxOTUyLCJleHAiOjE3NjM0MjE5NTJ9.bwLHSx-Zk2KIERvWAHhF9wz6REzZumeuBSeOc4MpBqo",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"detailnoI\": 484864\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/order_management/entities/od_detail/get_card",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "order_management",
                "entities",
                "od_detail",
                "get_card"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN2818",
      "item": [
        {
          "name": "conf_fp/delete",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiY2ZjY2ViZGYtNjNjMi00ODIyLThhMjYtOTY3N2Q1MGEzMzA1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMS0yMFQwNzowMToyNS42MTBaIiwiaWF0IjoxNzYzNjIyMDg1LCJleHAiOjE3NjM2ODIwODV9.hO0uJ4lNcjrRoD09q2i1aw92mi3RLMJsDImq-8T30TU",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\"primaryKeys\": {\r\n\"confFpnoI\": 17284\r\n}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/aircraft_administration/entities/conf_fp/delete",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "aircraft_administration",
                "entities",
                "conf_fp",
                "delete"
              ]
            }
          },
          "response": []
        },
        {
          "name": "conf_config/get_tree",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"confConfignoI\": 3113,\r\n    \"withSubTree\": false,\r\n    \"extendedFilters\": {\r\n        \"hwfp\": true,\r\n        \"swfp\": true,\r\n        \"fpes\": true\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/aircraft_administration/entities/conf_config/get_tree",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "aircraft_administration",
                "entities",
                "conf_config",
                "get_tree"
              ]
            }
          },
          "response": []
        },
        {
          "name": "conf_assignment/assign",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"aircraftnoI\": \"VPBID\",\r\n    \"confConfignoI\": 343\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/aircraft_administration/entities/conf_assignment/assign",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "aircraft_administration",
                "entities",
                "conf_assignment",
                "assign"
              ]
            }
          },
          "response": []
        },
        {
          "name": "part/get_configurations",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"limit\": 25,\r\n\t\"offset\": 0,\r\n\t\"partseqnoI\": 38828,\r\n\t\"psn\": 5616710,\r\n\t\"search\": {\r\n\t\t\"orderBy\": []\r\n\t}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/parts/entities/part/get_configurations",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "part",
                "get_configurations"
              ]
            }
          },
          "response": []
        },
        {
          "name": "part/search_by_config",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"confFpnoI\": 351180,\r\n    \"parentConfConfignoI\": 2235,\r\n    \"limit\": 25,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": []\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/parts/entities/part/search_by_config",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "part",
                "search_by_config"
              ]
            }
          },
          "response": []
        },
        {
          "name": "rotables/get_phisical_tree",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiNTU1ZWJiMTctOWI4Ni00YTNjLTk4NzUtZTIzY2U0NmIzOGY1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMS0yMVQwNzozODoyNC4yMTFaIiwiaWF0IjoxNzYzNzEwNzA0LCJleHAiOjE3NjM3NzA3MDR9.t8I9-GxU_yGEr7Ri0iHOagRBkm9GRma0bWDAh7R09hM",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"partno\": \"3-1596\",\r\n\t\"serialno\": \"40398\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/parts/entities/rotables/get_phisical_tree",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "rotables",
                "get_phisical_tree"
              ]
            }
          },
          "response": []
        },
        {
          "name": "rotables/get_functional_positions",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"confFpnoI\": 15713,\r\n\t\"limit\": 25,\r\n\t\"offset\": 0,\r\n\t\"parentConfConfignoI\": 2019,\r\n\t\"search\": {\r\n\t\t\"orderBy\": []\r\n\t}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/parts/entities/rotables/get_functional_positions",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "rotables",
                "get_functional_positions"
              ]
            }
          },
          "response": []
        },
        {
          "name": "rotables/find_functional_positions",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"limit\": 25,\r\n\t\"offset\": 0,\r\n\t\"parentConfConfignoI\": 2509,\r\n\t\"psn\": 102477,\r\n\t\"search\": {\r\n\t\t\"orderBy\": []\r\n\t}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/parts/entities/rotables/find_functional_positions",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "rotables",
                "find_functional_positions"
              ]
            }
          },
          "response": []
        },
        {
          "name": "rotables/deassign_configuration",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"confConfignoI\": 2136,\r\n    \"acRegistr\": \"73100\",\r\n\t\"partnos\": [ \"3-1530\"],\r\n    \"serialno\": \"0178/0178\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/aircraft_administration/entities/rotables/deassign_configuration",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "aircraft_administration",
                "entities",
                "rotables",
                "deassign_configuration"
              ]
            }
          },
          "response": []
        },
        {
          "name": "aircraft/deassign_configuration",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiNTU1ZWJiMTctOWI4Ni00YTNjLTk4NzUtZTIzY2U0NmIzOGY1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMS0yMVQwNzozODoyNC4yMTFaIiwiaWF0IjoxNzYzNzEwNzA0LCJleHAiOjE3NjM3NzA3MDR9.t8I9-GxU_yGEr7Ri0iHOagRBkm9GRma0bWDAh7R09hM",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"partno\": \"3-1596\",\r\n\t\"serialno\": \"40398\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/aircraft_administration/entities/aircraft/deassign_configuration",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "aircraft_administration",
                "entities",
                "aircraft",
                "deassign_configuration"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN3128",
      "item": [
        {
          "name": "rotables/get_components_tree",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"checkResultStatusExcluded\": [],\r\n\t\"functionalPositionDisabled\": [],\r\n\t\"functionalPositionPropertyDisabled\": [],\r\n\t\"onlyWithRequirements\": false,\r\n\t\"partno\": \"3-1596\",\r\n\t\"serialno\": \"40398\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/aircraft_administration/entities/rotables/get_components_tree",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "aircraft_administration",
                "entities",
                "rotables",
                "get_components_tree"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN1844",
      "item": [
        {
          "name": "forecast/calculate",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiY2ZjY2ViZGYtNjNjMi00ODIyLThhMjYtOTY3N2Q1MGEzMzA1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMi0wNVQwNjoxMjoxNy4zNzJaIiwiaWF0IjoxNzY0OTE1MTM3LCJleHAiOjE3NjQ5NzUxMzd9.V1gutHLakls2TrPIi7QyFnL012JJ4bTLZw0ISdcDPkU",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"eventPerfnoIs\": [\r\n\t\t19547733\r\n\t]\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/work_package/entities/forecast/calculate",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "work_package",
                "entities",
                "forecast",
                "calculate"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN308",
      "item": [
        {
          "name": "kpl_msc_ac_configuration/create",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"aircraftnoI\": 51,\r\n\t\"mpnoI\": 2,\r\n\t\"programType\": \"MP\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://ramasis-dev.ecias.ru/api/aircraft_administration/entities/kpl_msc_ac_configuration/create",
              "protocol": "https",
              "host": [
                "ramasis-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "aircraft_administration",
                "entities",
                "kpl_msc_ac_configuration",
                "create"
              ]
            }
          },
          "response": []
        },
        {
          "name": "counter/search_historical_state",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"aircraftnoI\": 51,\r\n\t\"mpnoI\": 2,\r\n\t\"programType\": \"MP\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://ramasis-dev.ecias.ru/api/aircraft_administration/entities/kpl_msc_ac_configuration/create",
              "protocol": "https",
              "host": [
                "ramasis-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "aircraft_administration",
                "entities",
                "kpl_msc_ac_configuration",
                "create"
              ]
            }
          },
          "response": []
        },
        {
          "name": "counter/get_counters",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "/*\r\n{\r\n    \"refKey\": 48,\r\n    \"refType\": \"AC_INT\",\r\n    \"gear\": false,\r\n    \"aircraft\": true,\r\n    \"masterCounter\": true,\r\n    \"childCounter\": true,\r\n    \"standaloneCounter\": true,\r\n    \"limit\": 25,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": [],\r\n        \"find\": [\r\n            [\r\n                {\r\n                    \"name\": \"lifeValue\",\r\n                    \"compare\": \"not_isNull\",\r\n                    \"value\": []\r\n                },\r\n                {\r\n                    \"name\": \"refType\",\r\n                    \"compare\": \"in\",\r\n                    \"value\": [\r\n                        \"AC_INT\"\r\n                    ]\r\n                },\r\n                {\r\n                    \"name\": \"type\",\r\n                    \"compare\": \"in\",\r\n                    \"value\": [\r\n                        \"Y\",\r\n                        \"C\",\r\n                        \"N\"\r\n                    ]\r\n                }\r\n            ]\r\n        ]\r\n    }\r\n}\r\n{\r\n    \"refKey\": 1476806,\r\n    \"refType\": \"RO\",\r\n    \"search\": {}\r\n}\r\n*/\r\n{\r\n    \"refKey\": 48,\r\n    \"refType\": \"AC_INT\",\r\n    \"gear\": false,\r\n    \"aircraft\": true,\r\n    \"search\": {}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/counter_management/entities/counter/get_counters",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "counter_management",
                "entities",
                "counter",
                "get_counters"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN3075",
      "item": []
    },
    {
      "name": "APN58",
      "item": [
        {
          "name": "wp_header/search_production_closed",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "const responseJson = pm.response.json();\r",
                  "pm.collectionVariables.set(\"token\", responseJson.accessToken);\r",
                  "\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            },
            {
              "listen": "prerequest",
              "script": {
                "exec": [
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiY2ZjY2ViZGYtNjNjMi00ODIyLThhMjYtOTY3N2Q1MGEzMzA1IiwicHJvdmlkZXIiOiJsb2NhbCIsInJvbGVzIjpbImt1cG9sX3VzZXIiLCJrdXBvbF9hZG1pbiJdLCJmdWxsTmFtZSI6Ikt1cG9sIEFkbWluIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMi0yM1QxNDoxMTowMC4zODhaIiwiaWF0IjoxNzY2NDk5MDYwLCJleHAiOjE3NjY1NTkwNjB9.oc_oBVPo9zIGxCkblsiM8HTOc1ycTzrHbcn3784-img",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"chainedEvents\": true,\r\n\t\"controlledEvents\": true,\r\n\t\"eventProperties\": {\r\n\t\t\"workordersIncludedOnly\": false\r\n\t},\r\n\t\"limit\": 25,\r\n\t\"offset\": 0,\r\n\t\"onlyExecutables\": false,\r\n\t\"search\": {\r\n\t\t\"orderBy\": []\r\n\t},\r\n\t\"woFilters\": {\r\n\t\t\"cdl\": true,\r\n\t\t\"dd\": true,\r\n\t\t\"m\": true,\r\n\t\t\"nef\": true,\r\n\t\t\"sv\": true\r\n\t},\r\n\t\"wpnoI\": 171\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://ramasis-dev.ecias.ru/api/work_package/entities/wp_header/search_production_closed",
              "protocol": "https",
              "host": [
                "ramasis-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "work_package",
                "entities",
                "wp_header",
                "search_production_closed"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN53",
      "item": [
        {
          "name": "address/search",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "const responseJson = pm.response.json();\r",
                  "pm.collectionVariables.set(\"token\", responseJson.accessToken);\r",
                  "\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            },
            {
              "listen": "prerequest",
              "script": {
                "exec": [
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"propTypeI\": 4,\r\n    \"addressTypes\": [],\r\n    \"includeInactive\": false,\r\n    \"countries\": [],\r\n    \"limit\": 25,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"pickedFields\": [\r\n            \"code\",\r\n            \"addressName\"\r\n        ],\r\n        \"orderBy\": []\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/address_administration/entities/address/search",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "address_administration",
                "entities",
                "address",
                "search"
              ]
            }
          },
          "response": []
        },
        {
          "name": "org_auth_config/search",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "const responseJson = pm.response.json();\r",
                  "pm.collectionVariables.set(\"token\", responseJson.accessToken);\r",
                  "\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            },
            {
              "listen": "prerequest",
              "script": {
                "exec": [
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"approvalType\": [\r\n        \"M\"\r\n    ],\r\n    \"limit\": 100,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": []\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/address_administration/entities/org_auth_config/search",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "address_administration",
                "entities",
                "org_auth_config",
                "search"
              ]
            }
          },
          "response": []
        },
        {
          "name": "maintenance_provider/search",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "const responseJson = pm.response.json();\r",
                  "pm.collectionVariables.set(\"token\", responseJson.accessToken);\r",
                  "\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            },
            {
              "listen": "prerequest",
              "script": {
                "exec": [
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"limit\": 25,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": [],\r\n        \"find\": [\r\n            [\r\n                {\r\n                    \"name\": \"status\",\r\n                    \"compare\": \"not_equal\",\r\n                    \"value\": [\r\n                        9\r\n                    ]\r\n                }\r\n            ]\r\n        ]\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/address_administration/entities/maintenance_provider/search",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "address_administration",
                "entities",
                "maintenance_provider",
                "search"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Applicability",
      "item": [
        {
          "name": "kpl_applicability/get_applicable_ac_ro",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "const responseJson = pm.response.json();\r",
                  "pm.collectionVariables.set(\"token\", responseJson.accessToken);\r",
                  "\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            },
            {
              "listen": "prerequest",
              "script": {
                "exec": [
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"effectivityRevisionnoI\": 84640,\r\n\t\"search\": {\r\n\t\t\"orderBy\": []\r\n\t}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/effectivity/entities/kpl_applicability/get_applicable_ac_ro",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "effectivity",
                "entities",
                "kpl_applicability",
                "get_applicable_ac_ro"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_applicability/get_applicable_ac_ro Copy",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "const responseJson = pm.response.json();\r",
                  "pm.collectionVariables.set(\"token\", responseJson.accessToken);\r",
                  "\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            },
            {
              "listen": "prerequest",
              "script": {
                "exec": [
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"effectivityRevisionnoI\": 60,\r\n\t\"search\": {\r\n\t\t\"orderBy\": []\r\n\t}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://uedn-dev.ecias.ru/api/effectivity/entities/kpl_applicability/calculate_applicability",
              "protocol": "https",
              "host": [
                "uedn-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "effectivity",
                "entities",
                "kpl_applicability",
                "calculate_applicability"
              ]
            }
          },
          "response": []
        },
        {
          "name": "kpl_applicability/get_applicable_ac_ro Copy 2",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "const responseJson = pm.response.json();\r",
                  "pm.collectionVariables.set(\"token\", responseJson.accessToken);\r",
                  "\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            },
            {
              "listen": "prerequest",
              "script": {
                "exec": [
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"effectivityRevisionnoI\": 60,\r\n\t\"search\": {\r\n\t\t\"orderBy\": []\r\n\t}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/effectivity/entities/kpl_applicability/calculate_applicability",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "effectivity",
                "entities",
                "kpl_applicability",
                "calculate_applicability"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN147",
      "item": [
        {
          "name": "counter/get_counters",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"aircraft\": false,\r\n\t\"childCounter\": true,\r\n\t\"gear\": true,\r\n\t\"limit\": 25,\r\n\t\"masterCounter\": true,\r\n\t\"offset\": 0,\r\n\t\"refKey\": 39060,\r\n\t\"refType\": \"RO\",\r\n\t\"search\": {\r\n\t\t\"find\": [\r\n\t\t\t[\r\n\t\t\t\t{\r\n\t\t\t\t\t\"compare\": \"not_isNull\",\r\n\t\t\t\t\t\"name\": \"lifeValue\",\r\n\t\t\t\t\t\"value\": []\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t\"compare\": \"in\",\r\n\t\t\t\t\t\"name\": \"refType\",\r\n\t\t\t\t\t\"value\": [\r\n\t\t\t\t\t\t\"RO\"\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\t\"compare\": \"in\",\r\n\t\t\t\t\t\"name\": \"type\",\r\n\t\t\t\t\t\"value\": [\r\n\t\t\t\t\t\t\"Y\",\r\n\t\t\t\t\t\t\"C\",\r\n\t\t\t\t\t\t\"N\"\r\n\t\t\t\t\t]\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t],\r\n\t\t\"orderBy\": []\r\n\t},\r\n\t\"standaloneCounter\": true\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/counter_management/entities/counter/get_counters",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "counter_management",
                "entities",
                "counter",
                "get_counters"
              ]
            }
          },
          "response": []
        },
        {
          "name": "counter/search_historical_state",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"acRegistr\": \"73099\",\r\n    \"date\": \"2025-03-01\",\r\n    \"time\": \"14:11\",\r\n    \"limit\": 25,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": []\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/counter_management/entities/counter/search_historical_state",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "counter_management",
                "entities",
                "counter",
                "search_historical_state"
              ]
            }
          },
          "response": []
        },
        {
          "name": "rotables/create AC",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"aircraft\": \"73130\",\r\n\t\"condition\": \"N\",\r\n\t\"counters\": [\r\n\t\t{\r\n\t\t\t\"counterDefnoI\": 1,\r\n\t\t\t\"counternoI\": 533,\r\n\t\t\t\"lifeValue\": 2795555\r\n\t\t},\r\n\t\t{\r\n\t\t\t\"counterDefnoI\": 2,\r\n\t\t\t\"counternoI\": 534,\r\n\t\t\t\"lifeValue\": 6434\r\n\t\t}\r\n\t],\r\n\t\"csn\": 0,\r\n\t\"deliveryDate\": \"2026-01-01\",\r\n\t\"historyText\": \"TEST MSG\",\r\n\t\"installationDate\": \"2026-01-02\",\r\n\t\"manufactureDate\": \"2026-01-01\",\r\n\t\"owner\": \"AFL\",\r\n\t\"partno\": \"3-1678-1\",\r\n\t\"readoutDate\": \"2026-01-02\",\r\n\t\"readoutTime\": \"13:59\",\r\n\t\"serialno\": \"TEST {{$randomInt}}\",\r\n\t\"tsn\": 0\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/parts/entities/rotables/create",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "rotables",
                "create"
              ]
            }
          },
          "response": []
        },
        {
          "name": "rotables/find",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"search\": {\r\n        \"find\": [\r\n            [\r\n                {\r\n                    \"name\": \"partno\",\r\n                    \"compare\": \"equal\",\r\n                    \"value\": [\r\n                        \"M07601\"\r\n                    ]\r\n                },\r\n                {\r\n                    \"name\": \"serialno\",\r\n                    \"compare\": \"equal\",\r\n                    \"value\": [\r\n                        \"3200B225\"\r\n                    ]\r\n                }\r\n            ]\r\n        ]\r\n    },\r\n    \"limit\": 1,\r\n    \"offset\": 0\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/parts/entities/rotables/find",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "rotables",
                "find"
              ]
            }
          },
          "response": []
        },
        {
          "name": "rotables/create Store",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"condition\": \"N\",\r\n\t\"csn\": 0,\r\n\t\"deliveryDate\": \"2025-01-01\",\r\n\t\"locationnoI\": 65873,\r\n\t\"manufactureDate\": \"2025-01-01\",\r\n\t\"owner\": \"AFL\",\r\n\t\"partno\": \"3-1678-1\",\r\n\t\"readoutDate\": \"2025-01-01\",\r\n\t\"readoutTime\": \"\",\r\n\t\"serialno\": \"TEST {{$randomInt}}\",\r\n\t\"station\": \"SVO\",\r\n\t\"store\": \"AT_BASE\",\r\n\t\"tsn\": 0\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-dev.ecias.ru/api/parts/entities/rotables/create",
              "protocol": "https",
              "host": [
                "kupol-dev",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "rotables",
                "create"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN150",
      "item": [
        {
          "name": "rotables/book_label",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "/* install only\r\n{\r\n    \"station\": \"SVO\",\r\n    \"acRegistr\": \"73160\",\r\n    \"position\": \"210075-A32S\",\r\n    \"locidPk\": 272937,\r\n    \"date\": \"2026-04-12\",\r\n    \"piSpecialBookings\": true,\r\n    \"specialBookingType\": \"InstallationOnly\",\r\n    \"hoursCounternoI\": 143,\r\n    \"cyclesCounternoI\": 144,\r\n    \"time\": \"14:32:00.000\",\r\n    \"validity\": \"2026-03-03\",\r\n    \"hours\": 19423,\r\n    \"landingCycles\": -1901417,\r\n    \"installedPartno\": \"12664\",\r\n    \"installedSerialno\": \"4458\",\r\n    \"tsn\": 2889900,\r\n    \"csn\": 39074,\r\n    \"mfgDate\": \"1972-01-01\"\r\n}\r\n/*\r\n/*\r\n{\r\n    \"station\": \"SVO\",\r\n    \"acRegistr\": \"73771\",\r\n    \"position\": \"250022-A32S-A\",\r\n    \"locidPk\": 214945,\r\n    \"workorder\": 22284587,\r\n    \"date\": \"2026-03-26\",\r\n    \"performedBy\": \"INSADMIN\",\r\n    \"piSpecialBookings\": false,\r\n    \"prSpecialBookings\": true,\r\n    \"specialBookingType\": \"RemovalOnly\",\r\n    \"hoursCounternoI\": 101,\r\n    \"cyclesCounternoI\": 102,\r\n    \"time\": \"08:56:00.000\",\r\n    \"validity\": \"2026-03-04\",\r\n    \"partExchangenoI\": 533124,\r\n    \"hours\": 1423154,\r\n    \"landingCycles\": 10727,\r\n    \"componentTsn\": 1709596,\r\n    \"componentCsn\": 8403,\r\n    \"removedPartno\": \"4510-48LG-00\",\r\n    \"removedSerialno\": \"T739104902\",\r\n    \"removalStore\": \"AT_BASE\",\r\n    \"removalUsLocation\": \"U/S\",\r\n    \"removalUsLocationnoI\": 57227,\r\n    \"scheduleType\": \"SD\",\r\n    \"removalReason\": \"1 WORKSTEP ADDED BY ATS_MT_L ON ON 28.Feb.2024\\nREPLACEMENT OF THE COFFEE MAKER FOR CLEANING. REPLACE THE COFFEE MAKER PN:4510-48LG-00 SN:T739104902 FOR CLEANING\"\r\n}\r\n*/",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/parts/entities/rotables/book_label",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "rotables",
                "book_label"
              ]
            }
          },
          "response": []
        },
        {
          "name": "ac_utilization/get_flights_at_label_booking",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"labelDate\": \"2025-01-01\",\r\n    \"labelTime\": \"01:00\",\r\n    \"acRegistr\": \"73160\",\r\n    \"station\": \"SVO\",\r\n    \"search\": {}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/aircraft_utilization/entities/ac_utilization/get_flights_at_label_booking",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "aircraft_utilization",
                "entities",
                "ac_utilization",
                "get_flights_at_label_booking"
              ]
            }
          },
          "response": []
        },
        {
          "name": "rotables/can_book_label",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"psn\": 1146884\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/parts/entities/rotables/can_book_label",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "rotables",
                "can_book_label"
              ]
            }
          },
          "response": []
        },
        {
          "name": "label_booking/repairable_consumables",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"labelno\": 10000000032\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/parts/entities/label_booking/repairable_consumables",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "label_booking",
                "repairable_consumables"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN2121",
      "item": [
        {
          "name": "od_detail/process_receiving",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"batchArray\": [\r\n\t\t{\r\n\t\t\t\"automaticNumbering\": false,\r\n\t\t\t\"batchno\": \"TEST {{$randomInt}}\",\r\n\t\t\t\"certificates\": [\r\n\t\t\t\t{\r\n\t\t\t\t\t\"certificateDate\": \"2026-01-01\",\r\n\t\t\t\t\t\"certificateTypeI\": 111,\r\n\t\t\t\t\t\"formTrackingNumber\": \"A1\"\r\n\t\t\t\t}\r\n\t\t\t],\r\n\t\t\t\"printLabels\": true,\r\n\t\t\t\"quantity\": 1\r\n\t\t}\r\n\t],\r\n\t\"detailnoI\": 1653340,//1653160 STG , 1764299 DEV, (stg 1653340 3-1530)\r\n\t\"locationnoI\": 72067,\r\n\t\"orderDetail\": {\r\n\t\t\"condition\": \"N\",\r\n\t\t\"owner\": \"AFL\",\r\n\t\t\"partno\": \"3-1530\"\r\n\t},\r\n\t\"quantity\": 1,\r\n\t\"remarks\": \"postman\"\r\n}\r\n/*\r\n{\r\n    \"quantity\": 1,\r\n    \"locationnoI\": 59902,\r\n    \"detailnoI\": 1653355,\r\n    \"receivingno\": 556678,\r\n    \"remarks\": \"Int. Part Remarks (Part No. 21435-00)\\nLOW FREQ ULB\\n\\nPart Remarks (Part No. 21435-00)\\nМаяк подводный низкочастотный\",\r\n    \"orderDetail\": {\r\n        \"partno\": \"21435-00\",\r\n        \"owner\": \"AFL\",\r\n        \"condition\": \"N\"\r\n    },\r\n    \"batchArray\": [\r\n        {\r\n            \"automaticNumbering\": false,\r\n            \"printLabels\": true,\r\n            \"quantity\": 1,\r\n            \"batchno\": \"SN1\",\r\n            \"certificates\": [\r\n                {\r\n                    \"certificateDate\": \"2026-02-01\",\r\n                    \"certificateTypeI\": 111,\r\n                    \"formTrackingNumber\": \"SN1\"\r\n                }\r\n            ]\r\n        }\r\n    ]\r\n}\r\n*/",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/order_management/entities/od_detail/process_receiving",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "order_management",
                "entities",
                "od_detail",
                "process_receiving"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN1206",
      "item": [
        {
          "name": "label_booking/create_repairable",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"acRegistr\": \"73730\",\r\n\t\"batchno\": \"UNK2\",\r\n\t\"date\": \"2026-02-03\",\r\n\t\"eventPerfnoI\": 23471366,\r\n\t\"location\": \"U/S\",\r\n\t\"owner\": \"AFL\",\r\n\t\"partno\": \"305766-1\",\r\n\t\"position\": \"19FP4\",\r\n\t\"qty\": 1,\r\n\t\"reason\": \"RR\",\r\n\t\"scheduled\": false,\r\n\t\"station\": \"SVO\",\r\n\t\"store\": \"AT_BASE\",\r\n\t\"tac\": 4370,\r\n\t\"tam\": 777859\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/parts/entities/label_booking/create_repairable",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "label_booking",
                "create_repairable"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN335",
      "item": [
        {
          "name": "od_rec_detail/cancel_inspection",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"cancellationReason\": \"a\",\r\n\t\"recdetailnoIs\": [\r\n\t\t2850812\r\n\t],\r\n\t\"userSign\": \"INSADMIN\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/order_management/entities/od_rec_detail/cancel_inspection",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "order_management",
                "entities",
                "od_rec_detail",
                "cancel_inspection"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN1418",
      "item": [
        {
          "name": "workorder/delete_workorder",
          "event": [
            {
              "listen": "test",
              "script": {
                "exec": [
                  "pm.test(\"Response status code is 400\", function () {\r",
                  "    pm.expect(pm.response.code).to.eql(400);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response time is less than 200ms\", function () {\r",
                  "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Response contains required fields\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"Description is an array\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.description).to.be.an('array');\r",
                  "});\r",
                  "\r",
                  "\r",
                  "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
                  "    const responseData = pm.response.json();\r",
                  "    \r",
                  "    pm.expect(responseData).to.be.an('object');\r",
                  "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
                  "});\r",
                  ""
                ],
                "type": "text/javascript",
                "packages": {},
                "requests": {}
              }
            }
          ],
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"eventPerfnoI\": -161293\r\n}\r\n",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/maintenance_program/entities/workorder/delete_workorder",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "maintenance_program",
                "entities",
                "workorder",
                "delete_workorder"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN188",
      "item": [
        {
          "name": "history/search",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"delDateAfterOrEqual\": \"2024-11-15\",\r\n    \"delDateBeforeOrEqual\": \"2024-11-17\",\r\n    \"includingAlternates\": true,\r\n    \"partno\": \"3-1530\",\r\n    \"serialno\": \"3934\",\r\n    \"limit\": 25,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": [\r\n            {\r\n                \"name\": \"delDate\",\r\n                \"order\": \"desc\"//,\r\n                \"name\": \"historynoI\",\r\n                \"order\": \"desc\"\r\n            }\r\n        ]\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/parts/entities/history/search",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "parts",
                "entities",
                "history",
                "search"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN30",
      "item": [
        {
          "name": "wp_header/search_ac_for_gantt",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"acTypes\": [\r\n        \"A32S\"\r\n    ],\r\n    \"classifications\": [\r\n        \"HEAVY\",\r\n        \"LINE\",\r\n        \"UNSPECIFIED\"\r\n    ],\r\n    \"wpClasses\": [\r\n        \"H\",\r\n        \"L\",\r\n        \"\"\r\n    ],\r\n    \"isExternalOrganizations\": false,\r\n    \"isInternalOrganizations\": true,\r\n    \"startDate\": \"2021-05-31\",\r\n    \"startTime\": \"00:00\",\r\n    \"endDate\": \"2029-09-03\",\r\n    \"endTime\": \"23:59\",   \r\n    \"offset\": 5,\r\n    \"search\": {}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/work_package/entities/wp_header/search_ac_for_gantt",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "work_package",
                "entities",
                "wp_header",
                "search_ac_for_gantt"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "APN206",
      "item": [
        {
          "name": "ac_utilization/search",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"acRegisterIn\": [\r\n        \"73160\"\r\n    ],\r\n    \"departure\": \"SVO\",\r\n    \"arrival\": \"IST\",\r\n    \"from\": \"2026-06-13\",\r\n    \"to\": \"2026-06-23\",\r\n    \"showCumulated\": false,\r\n    \"arrivalDate\": true,\r\n    \"bothDates\": false,\r\n    \"limit\": 25,\r\n    \"offset\": 0,\r\n    \"search\": {\r\n        \"orderBy\": []\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/aircraft_utilization/entities/ac_utilization/search",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "aircraft_utilization",
                "entities",
                "ac_utilization",
                "search"
              ]
            }
          },
          "response": []
        },
        {
          "name": "ac_utilization/find",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"search\": {\r\n        \"orderBy\": [\r\n            {\r\n                \"name\": \"validity\",\r\n                \"order\": \"desc\"\r\n            },\r\n            {\r\n                \"name\": \"arrivalTime\",\r\n                \"order\": \"desc\"\r\n            }\r\n        ],\r\n        \"find\": [\r\n            [\r\n                {\r\n                    \"name\": \"validity\",\r\n                    \"compare\": \"lessThanOrEqual\",\r\n                    \"value\": [\r\n                        \"2024-02-03\"\r\n                    ]\r\n                },\r\n                                {\r\n                    \"name\": \"validity\",\r\n                    \"compare\": \"moreThanOrEqual\",\r\n                    \"value\": [\r\n                        \"2024-02-01\"\r\n                    ]\r\n                },\r\n                {\r\n                    \"name\": \"recno\",\r\n                    \"compare\": \"not_equal\",\r\n                    \"value\": [\r\n                        0\r\n                    ]\r\n                },\r\n                {\r\n                    \"name\": \"acRegistr\",\r\n                    \"compare\": \"equal\",\r\n                    \"value\": [\r\n                        \"73160\"\r\n                    ]\r\n                }\r\n            ]            \r\n        ]\r\n    },\r\n    \"limit\": 20,\r\n    \"offset\": 80\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "https://kupol-stg.ecias.ru/api/aircraft_utilization/entities/ac_utilization/find",
              "protocol": "https",
              "host": [
                "kupol-stg",
                "ecias",
                "ru"
              ],
              "path": [
                "api",
                "aircraft_utilization",
                "entities",
                "ac_utilization",
                "find"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "auth-gate/login DEV",
      "event": [
        {
          "listen": "test",
          "script": {
            "exec": [
              "pm.test(\"Response status code is 400\", function () {\r",
              "    pm.expect(pm.response.code).to.eql(400);\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"Response time is less than 200ms\", function () {\r",
              "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"Response contains required fields\", function () {\r",
              "    const responseData = pm.response.json();\r",
              "    \r",
              "    pm.expect(responseData).to.be.an('object');\r",
              "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"Description is an array\", function () {\r",
              "    const responseData = pm.response.json();\r",
              "    \r",
              "    pm.expect(responseData).to.be.an('object');\r",
              "    pm.expect(responseData.description).to.be.an('array');\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
              "    const responseData = pm.response.json();\r",
              "    \r",
              "    pm.expect(responseData).to.be.an('object');\r",
              "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
              "});\r",
              "\r",
              "\r",
              "const responseJson = pm.response.json();\r",
              "pm.collectionVariables.set(\"token\", responseJson.accessToken);\r",
              "\r",
              ""
            ],
            "type": "text/javascript",
            "packages": {},
            "requests": {}
          }
        },
        {
          "listen": "prerequest",
          "script": {
            "exec": [
              ""
            ],
            "type": "text/javascript",
            "packages": {},
            "requests": {}
          }
        }
      ],
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"username\": \"admin\",\r\n    \"password\": \"admin\",\r\n    \"provider\": \"local\",\r\n    \"serviceName\": \"radar\"\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "https://kupol-dev.ecias.ru/auth-gate/login",
          "protocol": "https",
          "host": [
            "kupol-dev",
            "ecias",
            "ru"
          ],
          "path": [
            "auth-gate",
            "login"
          ]
        }
      },
      "response": []
    },
    {
      "name": "auth-gate/login TRASH",
      "event": [
        {
          "listen": "test",
          "script": {
            "exec": [
              "pm.test(\"Response status code is 400\", function () {\r",
              "    pm.expect(pm.response.code).to.eql(400);\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"Response time is less than 200ms\", function () {\r",
              "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"Response contains required fields\", function () {\r",
              "    const responseData = pm.response.json();\r",
              "    \r",
              "    pm.expect(responseData).to.be.an('object');\r",
              "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"Description is an array\", function () {\r",
              "    const responseData = pm.response.json();\r",
              "    \r",
              "    pm.expect(responseData).to.be.an('object');\r",
              "    pm.expect(responseData.description).to.be.an('array');\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
              "    const responseData = pm.response.json();\r",
              "    \r",
              "    pm.expect(responseData).to.be.an('object');\r",
              "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
              "});\r",
              "\r",
              "\r",
              "const responseJson = pm.response.json();\r",
              "pm.collectionVariables.set(\"token\", responseJson.accessToken);\r",
              "\r",
              ""
            ],
            "type": "text/javascript",
            "packages": {}
          }
        },
        {
          "listen": "prerequest",
          "script": {
            "exec": [
              ""
            ],
            "type": "text/javascript",
            "packages": {}
          }
        }
      ],
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"username\": \"admin\",\r\n    \"password\": \"admin\",\r\n    \"provider\": \"local\",\r\n    \"serviceName\": \"radar\"\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "https://kupol-trash.ecias.ru/auth-gate/login",
          "protocol": "https",
          "host": [
            "kupol-trash",
            "ecias",
            "ru"
          ],
          "path": [
            "auth-gate",
            "login"
          ]
        }
      },
      "response": []
    },
    {
      "name": "auth-gate/login STG",
      "event": [
        {
          "listen": "test",
          "script": {
            "exec": [
              "pm.test(\"Response status code is 400\", function () {\r",
              "    pm.expect(pm.response.code).to.eql(400);\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"Response time is less than 200ms\", function () {\r",
              "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"Response contains required fields\", function () {\r",
              "    const responseData = pm.response.json();\r",
              "    \r",
              "    pm.expect(responseData).to.be.an('object');\r",
              "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"Description is an array\", function () {\r",
              "    const responseData = pm.response.json();\r",
              "    \r",
              "    pm.expect(responseData).to.be.an('object');\r",
              "    pm.expect(responseData.description).to.be.an('array');\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
              "    const responseData = pm.response.json();\r",
              "    \r",
              "    pm.expect(responseData).to.be.an('object');\r",
              "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
              "});\r",
              "\r",
              "\r",
              "const responseJson = pm.response.json();\r",
              "pm.collectionVariables.set(\"token\", responseJson.accessToken);\r",
              "\r",
              ""
            ],
            "type": "text/javascript",
            "packages": {},
            "requests": {}
          }
        },
        {
          "listen": "prerequest",
          "script": {
            "exec": [
              ""
            ],
            "type": "text/javascript",
            "packages": {},
            "requests": {}
          }
        }
      ],
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"username\": \"admin\",\r\n    \"password\": \"admin\",\r\n    \"provider\": \"local\",\r\n    \"serviceName\": \"radar\"\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "https://kupol-stg.ecias.ru/auth-gate/login",
          "protocol": "https",
          "host": [
            "kupol-stg",
            "ecias",
            "ru"
          ],
          "path": [
            "auth-gate",
            "login"
          ]
        }
      },
      "response": []
    },
    {
      "name": "auth-gate/login RAMASIS",
      "event": [
        {
          "listen": "test",
          "script": {
            "exec": [
              "pm.test(\"Response status code is 400\", function () {\r",
              "    pm.expect(pm.response.code).to.eql(400);\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"Response time is less than 200ms\", function () {\r",
              "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"Response contains required fields\", function () {\r",
              "    const responseData = pm.response.json();\r",
              "    \r",
              "    pm.expect(responseData).to.be.an('object');\r",
              "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"Description is an array\", function () {\r",
              "    const responseData = pm.response.json();\r",
              "    \r",
              "    pm.expect(responseData).to.be.an('object');\r",
              "    pm.expect(responseData.description).to.be.an('array');\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
              "    const responseData = pm.response.json();\r",
              "    \r",
              "    pm.expect(responseData).to.be.an('object');\r",
              "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
              "});\r",
              "\r",
              "\r",
              "const responseJson = pm.response.json();\r",
              "pm.collectionVariables.set(\"token\", responseJson.accessToken);\r",
              "\r",
              ""
            ],
            "type": "text/javascript",
            "packages": {},
            "requests": {}
          }
        },
        {
          "listen": "prerequest",
          "script": {
            "exec": [
              ""
            ],
            "type": "text/javascript",
            "packages": {},
            "requests": {}
          }
        }
      ],
      "request": {
        "auth": {
          "type": "noauth"
        },
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"username\": \"ADMIN\",\r\n    \"password\": \"admin\",\r\n    \"provider\": \"local\",\r\n    \"serviceName\": \"radar\"\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "https://ramasis-dev.ecias.ru/auth-gate/login",
          "protocol": "https",
          "host": [
            "ramasis-dev",
            "ecias",
            "ru"
          ],
          "path": [
            "auth-gate",
            "login"
          ]
        }
      },
      "response": []
    },
    {
      "name": "auth-gate/login UEDN",
      "event": [
        {
          "listen": "test",
          "script": {
            "exec": [
              "pm.test(\"Response status code is 400\", function () {\r",
              "    pm.expect(pm.response.code).to.eql(400);\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"Response time is less than 200ms\", function () {\r",
              "    pm.expect(pm.response.responseTime).to.be.below(200);\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"Response contains required fields\", function () {\r",
              "    const responseData = pm.response.json();\r",
              "    \r",
              "    pm.expect(responseData).to.be.an('object');\r",
              "    pm.expect(responseData).to.have.all.keys('id', 'statusCode', 'requestId', 'message', 'description', 'timestamp', 'path');\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"Description is an array\", function () {\r",
              "    const responseData = pm.response.json();\r",
              "    \r",
              "    pm.expect(responseData).to.be.an('object');\r",
              "    pm.expect(responseData.description).to.be.an('array');\r",
              "});\r",
              "\r",
              "\r",
              "pm.test(\"StatusCode is a non-negative integer\", function () {\r",
              "    const responseData = pm.response.json();\r",
              "    \r",
              "    pm.expect(responseData).to.be.an('object');\r",
              "    pm.expect(responseData.statusCode).to.be.a('number').and.to.be.at.least(0);\r",
              "});\r",
              "\r",
              "\r",
              "const responseJson = pm.response.json();\r",
              "pm.collectionVariables.set(\"token\", responseJson.accessToken);\r",
              "\r",
              ""
            ],
            "type": "text/javascript",
            "packages": {},
            "requests": {}
          }
        },
        {
          "listen": "prerequest",
          "script": {
            "exec": [
              ""
            ],
            "type": "text/javascript",
            "packages": {},
            "requests": {}
          }
        }
      ],
      "request": {
        "auth": {
          "type": "noauth"
        },
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n    \"username\": \"UEDN1\",\r\n    \"password\": \"admin\",\r\n    \"provider\": \"local\",\r\n    \"serviceName\": \"radar\"\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "https://uedn-dev.ecias.ru/auth-gate/login",
          "protocol": "https",
          "host": [
            "uedn-dev",
            "ecias",
            "ru"
          ],
          "path": [
            "auth-gate",
            "login"
          ]
        }
      },
      "response": []
    },
    {
      "name": "Beautify",
      "request": {
        "auth": {
          "type": "bearer",
          "bearer": [
            {
              "key": "token",
              "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VyIjp7ImlkIjoiNTU1ZWJiMTctOWI4Ni00YTNjLTk4NzUtZTIzY2U0NmIzOGY1Iiwicm9sZXMiOlsia3Vwb2xfdXNlciIsImt1cG9sX2FkbWluIl0sImZ1bGxOYW1lIjoiS3Vwb2wgQWRtaW4iLCJwcm92aWRlciI6ImxvY2FsIiwiZXh0ZXJuYWxJZCI6IjU1NWViYjE3LTliODYtNGEzYy05ODc1LWUyM2NlNDZiMzhmNSJ9LCJjb21wYW55Ijp7InJvbGVzIjpbXX19LCJkYXRlIjoiMjAyNS0xMC0yOVQwNjozMDoyNy4wNTNaIiwiaWF0IjoxNzYxNzE5NDI3LCJleHAiOjE3NjE3Nzk0Mjd9.k9T8DktcvPtY6IqWBv_oh4sisstwHgD6DrJqg0xvYq4",
              "type": "string"
            }
          ]
        },
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "[\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"Try find process config\"\r\n    },\r\n    {\r\n        \"level\": \"debug\",\r\n        \"log\": \"processConfig\",\r\n        \"data\": [\r\n            {\r\n                \"id\": \"c5f88017-c8b6-41df-ae56-456765e744a1\",\r\n                \"subscriptionId\": \"642e7933-22bc-46ae-88be-ec748c80a7d5\",\r\n                \"code\": \"owner_swap\",\r\n                \"input\": {\r\n                    \"installedPsn\": \"event.installedPsn\",\r\n                    \"removedPsn\": \"event.removedPsn\",\r\n                    \"userSign\": \"user.userSign\"\r\n                },\r\n                \"description\": \"Swap owners between installed and removed components\",\r\n                \"dataProviders\": [\r\n                    {\r\n                        \"id\": \"5084c3e5-d905-4ecf-9ddf-fe670f172ebe\",\r\n                        \"processId\": \"c5f88017-c8b6-41df-ae56-456765e744a1\",\r\n                        \"code\": \"rotables\",\r\n                        \"name\": \"installed\",\r\n                        \"description\": \"Installed rotable\",\r\n                        \"input\": {\r\n                            \"psn\": \"event.installedPsn\"\r\n                        },\r\n                        \"position\": 0\r\n                    },\r\n                    {\r\n                        \"id\": \"22d42aab-4541-4e83-a7e7-8fa25b0d02d9\",\r\n                        \"processId\": \"c5f88017-c8b6-41df-ae56-456765e744a1\",\r\n                        \"code\": \"rotables\",\r\n                        \"name\": \"removed\",\r\n                        \"description\": \"Removed rotable\",\r\n                        \"input\": {\r\n                            \"psn\": \"event.removedPsn\"\r\n                        },\r\n                        \"position\": 0\r\n                    },\r\n                    {\r\n                        \"id\": \"862cb7a1-a26e-468a-bae4-f48f22f0a232\",\r\n                        \"processId\": \"c5f88017-c8b6-41df-ae56-456765e744a1\",\r\n                        \"code\": \"od_detail_open_return\",\r\n                        \"name\": \"installedReturn\",\r\n                        \"description\": \"Open return order check for installed rotable\",\r\n                        \"input\": {\r\n                            \"psn\": \"event.installedPsn\"\r\n                        },\r\n                        \"position\": 0\r\n                    },\r\n                    {\r\n                        \"id\": \"04e09095-1788-44c7-97c4-74c802511296\",\r\n                        \"processId\": \"c5f88017-c8b6-41df-ae56-456765e744a1\",\r\n                        \"code\": \"od_detail_open_return\",\r\n                        \"name\": \"removedReturn\",\r\n                        \"description\": \"Open return order check for removed rotable\",\r\n                        \"input\": {\r\n                            \"psn\": \"event.removedPsn\"\r\n                        },\r\n                        \"position\": 0\r\n                    }\r\n                ],\r\n                \"compareBlock\": {\r\n                    \"id\": \"522a240a-06e2-4248-a6f5-d39c4c1d9972\",\r\n                    \"processId\": \"c5f88017-c8b6-41df-ae56-456765e744a1\",\r\n                    \"parentId\": null,\r\n                    \"code\": \"and\",\r\n                    \"isRoot\": true,\r\n                    \"description\": null,\r\n                    \"source\": null,\r\n                    \"value\": null,\r\n                    \"comparators\": [\r\n                        {\r\n                            \"id\": \"2aa8d419-30b6-4f20-887b-2c86ea127581\",\r\n                            \"processId\": \"c5f88017-c8b6-41df-ae56-456765e744a1\",\r\n                            \"compareBlockId\": \"522a240a-06e2-4248-a6f5-d39c4c1d9972\",\r\n                            \"code\": \"not_equal\",\r\n                            \"dataType\": \"string\",\r\n                            \"leftSource\": \"installed\",\r\n                            \"leftValue\": \"owner\",\r\n                            \"rightSource\": \"removed\",\r\n                            \"rightValue\": \"owner\",\r\n                            \"description\": null\r\n                        },\r\n                        {\r\n                            \"id\": \"408b29bf-9101-450e-999b-22182a3d8279\",\r\n                            \"processId\": \"c5f88017-c8b6-41df-ae56-456765e744a1\",\r\n                            \"compareBlockId\": \"522a240a-06e2-4248-a6f5-d39c4c1d9972\",\r\n                            \"code\": \"equal\",\r\n                            \"dataType\": \"boolean\",\r\n                            \"leftSource\": \"installedReturn\",\r\n                            \"leftValue\": \"hasOpenReturnOrder\",\r\n                            \"rightSource\": null,\r\n                            \"rightValue\": \"false\",\r\n                            \"description\": null\r\n                        },\r\n                        {\r\n                            \"id\": \"2751efdc-b3a7-4b8b-bdcc-fdceb9eb82f5\",\r\n                            \"processId\": \"c5f88017-c8b6-41df-ae56-456765e744a1\",\r\n                            \"compareBlockId\": \"522a240a-06e2-4248-a6f5-d39c4c1d9972\",\r\n                            \"code\": \"equal\",\r\n                            \"dataType\": \"boolean\",\r\n                            \"leftSource\": \"removedReturn\",\r\n                            \"leftValue\": \"hasOpenReturnOrder\",\r\n                            \"rightSource\": null,\r\n                            \"rightValue\": \"false\",\r\n                            \"description\": null\r\n                        }\r\n                    ],\r\n                    \"compareBlocks\": []\r\n                }\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"Handle process \\\"owner_swap\\\"\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"try create data from dataprovider\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"try run dataprovider \\\"installed\\\"\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"dataprovider found\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"create dataprovider inputDto\"\r\n    },\r\n    {\r\n        \"level\": \"debug\",\r\n        \"log\": \"inputDto\",\r\n        \"data\": [\r\n            {\r\n                \"psn\": 702911\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"dataprovider \\\"installed\\\" complete\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"try run dataprovider \\\"removed\\\"\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"dataprovider found\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"create dataprovider inputDto\"\r\n    },\r\n    {\r\n        \"level\": \"debug\",\r\n        \"log\": \"inputDto\",\r\n        \"data\": [\r\n            {\r\n                \"psn\": 702912\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"dataprovider \\\"removed\\\" complete\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"try run dataprovider \\\"installedReturn\\\"\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"dataprovider found\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"create dataprovider inputDto\"\r\n    },\r\n    {\r\n        \"level\": \"debug\",\r\n        \"log\": \"inputDto\",\r\n        \"data\": [\r\n            {\r\n                \"psn\": 702911\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"dataprovider \\\"installedReturn\\\" complete\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"try run dataprovider \\\"removedReturn\\\"\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"dataprovider found\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"create dataprovider inputDto\"\r\n    },\r\n    {\r\n        \"level\": \"debug\",\r\n        \"log\": \"inputDto\",\r\n        \"data\": [\r\n            {\r\n                \"psn\": 702912\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"dataprovider \\\"removedReturn\\\" complete\"\r\n    },\r\n    {\r\n        \"level\": \"debug\",\r\n        \"log\": \"data\",\r\n        \"data\": [\r\n            {\r\n                \"subscriptionId\": \"642e7933-22bc-46ae-88be-ec748c80a7d5\",\r\n                \"event\": {\r\n                    \"code\": \"part_installed_and_removed\",\r\n                    \"entity\": \"Rotables\",\r\n                    \"installedPsn\": 702911,\r\n                    \"removedPsn\": 702912,\r\n                    \"user\": {\r\n                        \"id\": \"cfccebdf-63c2-4822-8a26-9677d50a3305\",\r\n                        \"roles\": [\r\n                            \"ADMIN\"\r\n                        ],\r\n                        \"fullName\": \"Kupol Admin\",\r\n                        \"provider\": \"local\",\r\n                        \"externalId\": \"555ebb17-9b86-4a3c-9875-e23ce46b38f5\",\r\n                        \"userSign\": \"INSADMIN\",\r\n                        \"isAdmin\": true\r\n                    },\r\n                    \"requestId\": \"31ea0c4d-500e-a39b-4fae-74a470c5563a\",\r\n                    \"source\": \"trash\"\r\n                },\r\n                \"user\": {\r\n                    \"id\": \"cfccebdf-63c2-4822-8a26-9677d50a3305\",\r\n                    \"roles\": [\r\n                        \"ADMIN\"\r\n                    ],\r\n                    \"fullName\": \"Kupol Admin\",\r\n                    \"provider\": \"local\",\r\n                    \"externalId\": \"555ebb17-9b86-4a3c-9875-e23ce46b38f5\",\r\n                    \"userSign\": \"INSADMIN\",\r\n                    \"isAdmin\": true\r\n                },\r\n                \"installed\": {\r\n                    \"mutator\": \"INSADMIN\",\r\n                    \"mutationTime\": \"11:00:17.752\",\r\n                    \"mutation\": \"2026-02-20\",\r\n                    \"status\": 0,\r\n                    \"createdDate\": \"2017-12-28\",\r\n                    \"createdBy\": \"80428\",\r\n                    \"psn\": 702911,\r\n                    \"modStatus\": null,\r\n                    \"condition\": \"N\",\r\n                    \"ohAtDateUnknown\": false,\r\n                    \"ohAtDate\": null,\r\n                    \"ohAtCsnUnknown\": false,\r\n                    \"ohAtCsn\": 0,\r\n                    \"ohAtTsnUnknown\": false,\r\n                    \"ohAtTsn\": 0,\r\n                    \"mfgUnknown\": false,\r\n                    \"dateInst\": \"2026-02-20\",\r\n                    \"treeType\": null,\r\n                    \"treePosition\": null,\r\n                    \"releaseno\": \"2017-N01324\",\r\n                    \"labelno\": 76316,\r\n                    \"locationnoI\": -1,\r\n                    \"locidPk\": -47313,\r\n                    \"location\": \"9106MH\",\r\n                    \"poolAcRegistr\": null,\r\n                    \"acRegistr\": \"73775\",\r\n                    \"orderdate\": null,\r\n                    \"orderno\": null,\r\n                    \"serialnonew\": null,\r\n                    \"partnonew\": null,\r\n                    \"mfgDate\": \"2017-12-12\",\r\n                    \"delDate\": \"2017-12-28\",\r\n                    \"owner\": \"0011000038\",\r\n                    \"serialno\": \"ABT-001797\",\r\n                    \"partno\": \"005-1040-0000\",\r\n                    \"linkedContract\": null,\r\n                    \"modAtMsn\": 0,\r\n                    \"repAtMsn\": 0,\r\n                    \"ohAtMsn\": 0,\r\n                    \"materialLifecycleId\": 461292,\r\n                    \"clonedSerialno\": null,\r\n                    \"assemblyLocidPk\": null,\r\n                    \"configId\": null,\r\n                    \"expiryDate\": null,\r\n                    \"originFaQty\": null,\r\n                    \"originFaCase\": null,\r\n                    \"originEntitynoI\": null,\r\n                    \"rotableStatus\": 0,\r\n                    \"entitynoI\": 1,\r\n                    \"plateNumber\": null,\r\n                    \"outgoingDetailnoI\": null,\r\n                    \"recDetailnoI\": 204603,\r\n                    \"projectnoI\": 11261,\r\n                    \"pma\": false,\r\n                    \"faQty\": 1,\r\n                    \"faCase\": 0,\r\n                    \"shopVisitCounter\": 0,\r\n                    \"resType\": null,\r\n                    \"modAtDateUnknown\": false,\r\n                    \"modAtDate\": null,\r\n                    \"modAtCsnUnknown\": false,\r\n                    \"modAtCsn\": 0,\r\n                    \"modAtTsnUnknown\": false,\r\n                    \"modAtTsn\": 0,\r\n                    \"repAtDateUnknown\": false,\r\n                    \"repAtDate\": null,\r\n                    \"repAtCsnUnknown\": false,\r\n                    \"repAtCsn\": 0,\r\n                    \"repAtTsnUnknown\": false,\r\n                    \"repAtTsn\": 0,\r\n                    \"shipdetailnoI\": null,\r\n                    \"intRemarks\": null,\r\n                    \"processor\": null,\r\n                    \"databaseModStatus\": null,\r\n                    \"softwareModStatus\": null,\r\n                    \"hardwareModStatus\": null\r\n                },\r\n                \"removed\": {\r\n                    \"mutator\": \"INSADMIN\",\r\n                    \"mutationTime\": \"11:00:17.752\",\r\n                    \"mutation\": \"2026-02-20\",\r\n                    \"status\": 0,\r\n                    \"createdDate\": \"2017-12-28\",\r\n                    \"createdBy\": \"80428\",\r\n                    \"psn\": 702912,\r\n                    \"modStatus\": null,\r\n                    \"condition\": \"US\",\r\n                    \"ohAtDateUnknown\": false,\r\n                    \"ohAtDate\": null,\r\n                    \"ohAtCsnUnknown\": false,\r\n                    \"ohAtCsn\": 0,\r\n                    \"ohAtTsnUnknown\": false,\r\n                    \"ohAtTsn\": 0,\r\n                    \"mfgUnknown\": false,\r\n                    \"dateInst\": null,\r\n                    \"treeType\": null,\r\n                    \"treePosition\": null,\r\n                    \"releaseno\": \"2017-N0132 \",\r\n                    \"labelno\": 76316,\r\n                    \"locationnoI\": 57227,\r\n                    \"locidPk\": null,\r\n                    \"location\": null,\r\n                    \"poolAcRegistr\": null,\r\n                    \"acRegistr\": null,\r\n                    \"orderdate\": \"2026-02-20\",\r\n                    \"orderno\": \"R42714026\",\r\n                    \"serialnonew\": null,\r\n                    \"partnonew\": null,\r\n                    \"mfgDate\": \"2017-12-12\",\r\n                    \"delDate\": \"2017-12-28\",\r\n                    \"owner\": \"AFL\",\r\n                    \"serialno\": \"ABT-001407\",\r\n                    \"partno\": \"005-1040-0000\",\r\n                    \"linkedContract\": null,\r\n                    \"modAtMsn\": 0,\r\n                    \"repAtMsn\": 0,\r\n                    \"ohAtMsn\": 0,\r\n                    \"materialLifecycleId\": 461293,\r\n                    \"clonedSerialno\": null,\r\n                    \"assemblyLocidPk\": null,\r\n                    \"configId\": null,\r\n                    \"expiryDate\": null,\r\n                    \"originFaQty\": null,\r\n                    \"originFaCase\": null,\r\n                    \"originEntitynoI\": null,\r\n                    \"rotableStatus\": 0,\r\n                    \"entitynoI\": 1,\r\n                    \"plateNumber\": null,\r\n                    \"outgoingDetailnoI\": null,\r\n                    \"recDetailnoI\": 204604,\r\n                    \"projectnoI\": 11261,\r\n                    \"pma\": false,\r\n                    \"faQty\": 0,\r\n                    \"faCase\": -2,\r\n                    \"shopVisitCounter\": 0,\r\n                    \"resType\": null,\r\n                    \"modAtDateUnknown\": false,\r\n                    \"modAtDate\": null,\r\n                    \"modAtCsnUnknown\": false,\r\n                    \"modAtCsn\": 0,\r\n                    \"modAtTsnUnknown\": false,\r\n                    \"modAtTsn\": 0,\r\n                    \"repAtDateUnknown\": false,\r\n                    \"repAtDate\": null,\r\n                    \"repAtCsnUnknown\": false,\r\n                    \"repAtCsn\": 0,\r\n                    \"repAtTsnUnknown\": false,\r\n                    \"repAtTsn\": 0,\r\n                    \"shipdetailnoI\": null,\r\n                    \"intRemarks\": null,\r\n                    \"processor\": null,\r\n                    \"databaseModStatus\": null,\r\n                    \"softwareModStatus\": null,\r\n                    \"hardwareModStatus\": null\r\n                },\r\n                \"installedReturn\": {\r\n                    \"hasOpenReturnOrder\": false\r\n                },\r\n                \"removedReturn\": {\r\n                    \"hasOpenReturnOrder\": false\r\n                }\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"Create all comparators\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"create compare block \\\"and\\\"\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"create comparator \\\"not_equal\\\"\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"comparator \\\"not_equal\\\" created\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"comparator \\\"not_equal\\\" added\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"create comparator \\\"equal\\\"\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"comparator \\\"equal\\\" created\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"comparator \\\"equal\\\" added\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"create comparator \\\"equal\\\"\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"comparator \\\"equal\\\" created\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"comparator \\\"equal\\\" added\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"compare block \\\"and\\\" created\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"All comparators created\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"Check need run process\"\r\n    },\r\n    {\r\n        \"level\": \"debug\",\r\n        \"log\": \"needProcess\",\r\n        \"data\": [\r\n            true\r\n        ]\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"Found processor\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"Try create inputDto with input\"\r\n    },\r\n    {\r\n        \"level\": \"debug\",\r\n        \"log\": \"processInput\",\r\n        \"data\": [\r\n            {\r\n                \"installedPsn\": \"event.installedPsn\",\r\n                \"removedPsn\": \"event.removedPsn\",\r\n                \"userSign\": \"user.userSign\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"InputDto created\"\r\n    },\r\n    {\r\n        \"level\": \"debug\",\r\n        \"log\": \"inputDto\",\r\n        \"data\": [\r\n            {\r\n                \"installedPsn\": 702911,\r\n                \"removedPsn\": 702912,\r\n                \"userSign\": \"INSADMIN\"\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"Try validate inputDto\"\r\n    },\r\n    {\r\n        \"level\": \"log\",\r\n        \"log\": \"Try process run\"\r\n    },\r\n    {\r\n        \"level\": \"error\",\r\n        \"log\": {\r\n            \"query\": \"SELECT \\\"c\\\".\\\"form_tracking_no\\\" as \\\"formTrackingNo\\\", \\\"c\\\".\\\"certificate_address_i\\\" as \\\"certificateAddressI\\\", \\\"c\\\".\\\"certificate_date\\\" as \\\"certificateDate\\\" FROM \\\"kupol\\\".\\\"certificate\\\" \\\"c\\\" INNER JOIN \\\"kupol\\\".\\\"certificate_link\\\" \\\"cl\\\" ON \\\"cl\\\".\\\"certificate_i\\\" = \\\"c\\\".\\\"certificate_i\\\"          AND \\\"cl\\\".\\\"source_type\\\" = $1          AND \\\"cl\\\".\\\"source_key\\\" = $2 WHERE \\\"c\\\".\\\"state\\\" = :state\",\r\n            \"parameters\": [\r\n                \"RO\",\r\n                702911\r\n            ],\r\n            \"driverError\": {\r\n                \"length\": 149,\r\n                \"name\": \"error\",\r\n                \"severity\": \"ОШИБКА\",\r\n                \"code\": \"42601\",\r\n                \"position\": \"363\",\r\n                \"file\": \"scan.l\",\r\n                \"line\": \"1244\",\r\n                \"routine\": \"scanner_yyerror\"\r\n            },\r\n            \"length\": 149,\r\n            \"severity\": \"ОШИБКА\",\r\n            \"code\": \"42601\",\r\n            \"position\": \"363\",\r\n            \"file\": \"scan.l\",\r\n            \"line\": \"1244\",\r\n            \"routine\": \"scanner_yyerror\"\r\n        }\r\n    }\r\n]",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": ""
        }
      },
      "response": []
    }
  ],
  "auth": {
    "type": "bearer",
    "bearer": [
      {
        "key": "token",
        "value": "{{token}}",
        "type": "string"
      }
    ]
  },
  "event": [
    {
      "listen": "prerequest",
      "script": {
        "type": "text/javascript",
        "packages": {},
        "requests": {},
        "exec": [
          ""
        ]
      }
    },
    {
      "listen": "test",
      "script": {
        "type": "text/javascript",
        "packages": {},
        "requests": {},
        "exec": [
          ""
        ]
      }
    }
  ],
  "variable": [
    {
      "key": "token",
      "value": ""
    }
  ]
}