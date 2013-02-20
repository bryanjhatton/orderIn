
package views.html

import play.templates._
import play.templates.TemplateMagic._

import play.api.templates._
import play.api.templates.PlayMagic._
import models._
import controllers._
import java.lang._
import java.util._
import scala.collection.JavaConversions._
import scala.collection.JavaConverters._
import play.api.i18n._
import play.core.j.PlayMagicForJava._
import play.mvc._
import play.data._
import play.api.data.Field
import play.mvc.Http.Context.Implicit._
import views.html._
/**/
object main extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template3[String,Html,Html,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(title: String)(navbar: Html)(content: Html):play.api.templates.Html = {
        _display_ {

Seq[Any](format.raw/*1.46*/("""

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>"""),_display_(Seq[Any](/*13.9*/title)),format.raw/*13.14*/("""</title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width">

<link rel="stylesheet" href="../assets/stylesheets/bootstrap.css">
<style>
body """),format.raw/*19.6*/("""{"""),format.raw/*19.7*/("""
    padding-top: 60px;
    padding-bottom: 40px;
"""),format.raw/*22.1*/("""}"""),format.raw/*22.2*/("""
</style>
<link rel="stylesheet" href="../assets/stylesheets/bootstrap-responsive.min.css">
<link rel="stylesheet" href="../assets/stylesheets/main.css">

<script src="../assets/javascripts/vendor/modernizr-2.6.2.min.js"></script>
</head>
	<body>
	    <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        """),_display_(Seq[Any](/*34.10*/navbar)),format.raw/*34.16*/("""

        <div class="container">
        	"""),_display_(Seq[Any](/*37.11*/content)),format.raw/*37.18*/("""
		    <hr>
		    <footer>
		        <p>&copy; LinkedIn 2013</p>
		    </footer>
		</div>

        <script
            src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="../assets/javascripts/vendor/jquery-1.9.1.min.js"><\/script>')</script>

        <script src="../assets/javascripts/vendor/bootstrap.min.js"></script>

        <script src="../assets/javascripts/plugins.js"></script>
        <script src="../assets/javascripts/main.js"></script>


	</body>
</html>
"""))}
    }
    
    def render(title:String,navbar:Html,content:Html): play.api.templates.Html = apply(title)(navbar)(content)
    
    def f:((String) => (Html) => (Html) => play.api.templates.Html) = (title) => (navbar) => (content) => apply(title)(navbar)(content)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Feb 19 22:38:18 PST 2013
                    SOURCE: /Users/bhatton/Workspace/test-app/app/views/main.scala.html
                    HASH: 6b714ce0f93112c283afc1393f3dee8599cec67c
                    MATRIX: 732->1|853->45|1281->438|1308->443|1514->622|1542->623|1619->673|1647->674|2264->1255|2292->1261|2372->1305|2401->1312
                    LINES: 26->1|29->1|41->13|41->13|47->19|47->19|50->22|50->22|62->34|62->34|65->37|65->37
                    -- GENERATED --
                */
            