//This is the title for your window tab, and your Radar
document.title = "WotifGroup's Technology Radar (December 2014)";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - 0. Adopt: blips you should be using now; proven and mature for use
// - 1. Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - 2. Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - 3. Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "theta" : 90,
        "items" : [ 
            [
            {"name":"Sacrificial Architecture","movement":"c"},   
            {"name":"Sensible defaults", "movement":"c"},   
            {"name":"Dependency Injection", "movement":"c"},   
            {"name":"Coding architects", "movement":"c"}
                ],
                [
            {"name":"SaaS for non-core systems", "movement":"c"},   
            {"name":"Pair Programming", "movement":"c"}, 
            {"name":"iOS Accessibility", "movement":"c"},
            {"name":"Single Page App", "movement":"c", "url":"http://www.google.com"},
            {"name":"iOS Adaptivity", "movement":"c"},   
            {"name":"Build Pipelines", "movement":"c"},   
            {"name":"Data Informed Decion Making", "movement":"c"},
            {"name":"Polygot Programming", "movement":"c"},
            { name: 'internal load balancing off F5^', movement: 'c' },
            {"name":"Isolated dev envs", "movement":"c"},  
            {"name":"Edge Services", "movement":"c"}, 
            {"name":"Clean Code", "movement":"c"},
            {"name":"Wide and Thin Front-Ends", "movement":"c"},
            {"name":"Zookeeper for App Config", "movement":"c"}, 
            {"name":"Property based testing", "movement":"c"},
            {"name":"Evolutionary architecture", "movement":"c"},
            {"name":"Code Reviews", "movement":"c"},
            {"name":"Valuable, cheap tests", "movement":"c"}
                ],
            [
            { name: 'Git flow / Pull Requests ^', movement: 'c' },
            {"name":"Incremental data warehousing", "movement":"c"},    
            {"name":"Events for messages - CQRS", "movement":"c"},
            {"name":"Measure Pipeline disruptions", "movement":"c"}, 
            {"name":"Continuous Experimentation", "movement":"c"},
            { name: 'Reduce iRules dependence ^', movement: 'c' }
            ]
        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "theta" : 0,
        "items" : [ 
            [
  { name: 'JDBI ^', movement: 'c' },
  { name: 'Kafka', movement: 'c',    domain: 'back-end' },
  { name: 'ELK', movement: 'c',    domain: 'back-end' },
  { name: 'Liquibase', movement: 'c' },
  { name: 'haproxy', movement: 'c' }
                ],
            [
{ name: 'Docker', movement: 't' },
  { name: 'bind', movement: 'c' },
  { name: 'Appium', movement: 'c',    domain: 'mobile, front-end' }, 
 { name: 'Android Studio', movement: 'c',    domain: 'mobile, dev' },
  { name: 'Responsive Android', movement: 'c' },
  { name: 'AutoLayout - iOS', movement: 'c',    domain: '' },
  { name: 'Kiwi - iOS unit test', movement: 'c',    domain: '' },
  { name: 'BEM', movement: 'c',    domain: 'front-end' },
  { name: 'Crashlytics', movement: 'c',    domain: 'mobile' },
  { name: 'Consul', movement: 't' }, 
   { name: 'Swagger Code-Gen', movement: 'c' },
   { name: 'PowerMock ^', movement: 'c' },
   { name: 'Mockito', movement: 'c',    domain: 'back-end' },
   { name: 'Json Web Tokens (JWT)', movement: 'c' },
   { name: 'Lemming', movement: 'c' },
   { name: 'Hystrix', movement: 'c' },
  { name: 'Git', movement: 'c' }
                ],
            [
  { name: 'Ansible', movement: 'c' },  
  { name: 'Hip Chat', movement: 'c' },
  { name: 'Trello', movement: 'c' },
  { name: 'Charles HTTP Proxy', movement: 'c' },
  { name: 'Xamarin', movement: 'c' },
  { name: 'Android Annotations', movement: 'c' },
  { name: 'GenyMotion', movement: 'c' }
                ],
            [
  { name: 'AppManager ^', movement: 'c' },
  { name: 'Hibernate ^', movement: 'c' },
  { name: 'mongoDB', movement: 'c' }, 
  { name: 'Subversion', movement: 'c' }
                ]
  ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "theta" : 180,
        "items" : [
            [
            {"name":"Google Play - (alpha/beta builds)", "movement":"c"},
            {"name":"JVM as platform", "movement":"c"},   
            {"name":"AWS", "movement":"c"},   
            { name: 'BigIP v11', movement: 'c' }
                ],
            [
            {"name":"OpenId Connect", "movement":"t"},   
            {"name":"Location based services", "movement":"c"},
            {"name":"Openstack", "movement":"c"},
            {"name":"RHEL 7", "movement":"c"}
                ],
            [
            {"name":"App containers", "movement":"c"},
            {"name":"Google Cloud Data Flow", "movement":"t"},
            { name: 'Postgres as NoSQL', movement: 'c' },
            {"name":"AWS 2014 Innovations", "movement":"c"},
            {"name":"Azure", "movement":"c"},   
            { name: 'Mesos', movement: 't' },
            { name: 'Marathon', movement: 't' },
            { name: 'Kubernetes', movement: 't' },
            {"name":"Google App Engine", "movement":"c"},   
            {"name":"Google as corporate platform", "movement":"c"}
                ],
            [
            {"name":"Ruby On Rails", "movement":"c"},
            {"name":"Everest", "movement":"c"},   
            {"name":"Magnolia CMS", "movement":"c"},   
            {"name":"Java EE - the Bad Parts", "movement":"c"},   
            {"name":"MS SqlServer", "movement":"c"},
            {"name":"RHEL 5", "movement":"c"}
                ]
        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "theta" : 270,
        "items" : [ 
             [
            { name: 'CDI', movement: 'c' },
            { name: 'Jersey', movement: 'c' },
            { name: 'Mustache/Handlebars template', movement: 'c', domain: 'template' },
            { name: 'Guice', movement: 'c' }
                ],
            [
            { name: 'RxJava', movement: 'c', domain: 'template' },          
            {"name":"Java 8", "movement":"c"},   
            {"name":"Groovy ^", "movement":"c"}
                ],
                 [
            {"name":"Swift", "movement":"c"},
            {"name":"Scala - the good parts ^", "movement":"c"},   
            {"name":"Serverside Javascript", "movement":"c"},   
            {"name":"Coffeescript", "movement":"c"},
            {"name":"Functional Reactive Programming", "movement":"c"},
            {"name":"Clojure", "movement":"c"},
            { name: 'RxJs', movement: 'c', domain: 'template' },
            { name: 'Web Components', movement: 'c' }
                ],
             [
            { name: 'Spring ^', movement: 'c' },
            {"name":"Web Objects", "movement":"c"},
            {"name":"ASP Classic", "movement":"c"},
            {"name":"Java 6 and earlier", "movement":"c"}
                 ]
        ]
    }
];