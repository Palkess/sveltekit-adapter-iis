export const WEB_CONFIG = `<configuration>
  <system.webServer>

    <!-- indicates that the hello.js file is a node.js application 
    to be handled by the iisnode module -->

    <handlers>
      <add name="iisnode" path="hello.js" verb="*" modules="iisnode" />
    </handlers>

    <!-- use URL rewriting to redirect the entire branch of the URL namespace
    to hello.js node.js application; for example, the following URLs will 
    all be handled by hello.js:
    
        http://localhost/node/express/myapp/foo
        http://localhost/node/express/myapp/bar
        
    -->

    <rewrite>
      <rules>
        <rule name="myapp">
          <match url="myapp/*" />
          <action type="Rewrite" url="hello.js" />
        </rule>
      </rules>
    </rewrite> 
    
  </system.webServer>
</configuration>
`
