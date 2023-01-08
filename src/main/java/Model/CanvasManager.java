package Model;

import java.util.Date;

public class CanvasManager {
    public PointBean  checkPointOnCanvas(Point point, Canvas canvas){
        Date date = new Date();
        long startTime = System.nanoTime();
        PointCheckResult result = canvas.checkPoint(point);
        long time= (System.nanoTime()-startTime)/1000;
        float x = point.getXCoordinate();
        float y = point.getYCoordinate();
        float r = canvas.getRadius();
        return new PointBean(point,canvas, date,time,result);


    }
}
