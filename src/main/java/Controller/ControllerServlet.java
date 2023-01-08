package Controller;


import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet(value = "/LAB2",urlPatterns = {"/LAB2"})
public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException
    {
        req.getRequestDispatcher("index.jsp").forward(req,resp);

    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
         RequestDispatcher requestDispatcherJSP=request.getRequestDispatcher("index.jsp");
        RequestDispatcher requestDispatcherServlet = request.getRequestDispatcher("AreaCheckServlet");
        response.setContentType("text/html");
        if (request.getParameter("x")==null || request.getParameter("y")==null || request.getParameter("r")==null){
           requestDispatcherJSP.forward(request,response);
       }
        else {
            requestDispatcherServlet.forward(request,response);
            }



    }
}
