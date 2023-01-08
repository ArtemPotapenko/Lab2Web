package Model;


import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.DataInput;
import java.io.IOException;
import java.util.Date;

@WebServlet(name = "AreaCheckServlet", value = "/AreaCheckServlet")
public class AreaCheckServlet extends HttpServlet {
    

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Date date=new Date();
        float x = Float.parseFloat(request.getParameter("x"));
        float y = Float.parseFloat(request.getParameter("y"));
        float r = Float.parseFloat(request.getParameter("r"));
        Point point=new Point(x,y);
        Canvas canvas=new Canvas(r);
        CanvasManager canvasManager=new CanvasManager();

        PointBean pointBean=canvasManager.checkPointOnCanvas(point,canvas);
        if (request.getSession().getAttribute("pointBeanCollector")==null){
            PointBeanCollector pointBeanCollector = new PointBeanCollector();
            pointBeanCollector.add(pointBean);
            request.getSession().setAttribute("pointBeanCollector",pointBeanCollector);
        }else { PointBeanCollector pointBeanCollector = (PointBeanCollector) request.getSession().getAttribute("pointBeanCollector");
            pointBeanCollector.add(pointBean);
            request.getSession().setAttribute("pointBeanCollector",pointBeanCollector);

        }
        request.getRequestDispatcher("index.jsp").forward(request,response);

    }
}
