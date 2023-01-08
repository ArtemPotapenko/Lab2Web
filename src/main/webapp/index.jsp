<%@ page import="Model.PointBean" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@page session="true"%>
<!DOCTYPE html>
<html>
<head>
    <jsp:useBean id="pointBeanCollector" class="Model.PointBeanCollector" scope="session">
    </jsp:useBean>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>LAB2</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='stylesheets/MainPage.css'>
    <script src="javascript/jquery-3.6.1.min.js" type="text/javascript"></script>
    <script type="text/javascript" src='javascript/Main.js'></script>
</head>
<body>
<header>Потапенко Артем Денисович <br>
    P32312, 336773 <br>
    Вриант 3231212</header>
<form id="point_form" method="post" action="LAB2">
    <table id="main" >
        <script >
            <% if (pointBeanCollector.getPointBeans().size()!=0){%>
            let thisRadius = "<%= pointBeanCollector.getPointBeans().get(pointBeanCollector.getPointBeans().size()-1).getCanvas().getRadius()%>";
            let select = document.getElementById('r').options;


            for (let i = 0; i < select.length; i++) {
                if (select[i].value === thisRadius) select[i].selected = true;
            }
            <%}%>
        </script>

        <tr>
            <td rowspan="3" >
                <canvas id="canvas" width="700" height="700" onclick="checkPoint(event)"></canvas>
            </td><td class="choice">
            <a>Введите X:<br></a> <div name="x" class="point">
            <% for (int i = -3; i<=5;i++){%>
            <input id="<%=i%>x" class="point_x" onclick="choiceXValue(<%=i%>)" type="button" value=<%=i%>>
            <%if (i==0) {%><br id="xbr"> <%}}%>

        </div>
            <div> <input id ="x_value" type="hidden"></div>
        </td><td rowspan="20"><table id="table" >
            <thead>
            <tr id="resulttable" >
                <th>Время начала</th>
                <th>Время работы</th>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Результат</th>
            </tr>
            <%for (PointBean point: pointBeanCollector.getPointBeans()){%>
            <tr>
                <td class="result"><%=point.getStartDate()%></td>
                <td class="result"><%=point.getTime()%> ms</td>
                <td class="result"><%=point.getPoint().getXCoordinate()%></td>
                <td class="result"><%=point.getPoint().getYCoordinate()%></td>
                <td class="result"><%=point.getCanvas().getRadius()%></td>
                <td class="result"><%=point.getPointCheckResult().isHit() ?  "HIT" : "MISS"%></td>
            </tr>
            <%}%>

            </thead>
            <tbody>
            </tbody>
        </table>
        </td></tr><tr><td class="choice">
        <a>Выберете Y: </a>

        <br>

        <div name="y" class="point">
            <textarea maxlength="13" name="y" id="y" class="point_y" placeholder="Значение от -5 до 3..."></textarea>
        </div>

    </tr>


        <tr><td class="choice" ><a>Выберете R: </a>

            <br>
            <div name="r" class="point">
                <select name="r" id ="r" class="point_r" onchange="drawR(value)">
                    <option value="0" >...</option>
                    <% for (double i=1.0;i<=3.0;i+=0.5){%>
                    <option>
                        <%=i%>
                    </option>
                    <%}%>
                </select>
            </div>
        </td>
        </tr>
    </table>
    <script>
        function drawR(radius){
            draw(radius);
            <% for (PointBean point : pointBeanCollector.getPointBeans()){
                float radius = point.getCanvas().getRadius();
                boolean check = point.getPointCheckResult().isHit();
               %>
            if (radius==="<%=radius%>"){
                drawPoint("<%=point.getPoint().getXCoordinate()%>","<%=point.getPoint().getYCoordinate()%>","<%=check ? "red" : "black"%>");
            }
            <%}%>
        }
    </script>
    <div id="fail"></div>
    <br>

    <button type="submit" class="check" id="check" onclick="send();return false" >
        <b>CHECK</b>
    </button>
    <button type="button" class="check" id="clear" onclick="clearForm();return false;" >
        <b>CLEAR</b></button>
</form>
</body>
</html>