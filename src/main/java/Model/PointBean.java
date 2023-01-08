package Model;

import java.io.Serializable;
import java.util.Date;

public class PointBean implements Serializable {
    private Point point;
    private Canvas canvas;
    private Date startDate;
    private long time;
    PointCheckResult pointCheckResult;

    public PointBean() {
        point= new Point(0,0);
        canvas=new Canvas(0);
        startDate = new Date();
        time = 0;
        pointCheckResult=PointCheckResult.MISS;


    }

    public PointBean(Point point, Canvas canvas, Date startDate, long time, PointCheckResult pointCheckResult) {
        this.point = point;
        this.canvas = canvas;
        this.startDate = startDate;
        this.time = time;
        this.pointCheckResult = pointCheckResult;
    }

    public Point getPoint() {
        return point;
    }

    public void setPoint(Point point) {
        this.point = point;
    }

    public Canvas getCanvas() {
        return canvas;
    }

    public void setCanvas(Canvas canvas) {
        this.canvas = canvas;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public long getTime() {
        return time;
    }

    public void setTime(long time) {
        this.time = time;
    }

    public PointCheckResult getPointCheckResult() {
        return pointCheckResult;
    }

    public void setPointCheckResult(PointCheckResult pointCheckResult) {
        this.pointCheckResult = pointCheckResult;
    }
}
