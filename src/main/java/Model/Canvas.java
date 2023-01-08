package Model;

import java.io.Serializable;

public class Canvas implements Serializable {
    private final float radius;
    public Canvas(float radius){
        this.radius=radius;

    }
    public PointCheckResult checkPoint(Point point){
        float x = point.getXCoordinate();
        float y = point.getYCoordinate();
        if (x>=0 && y<=0 && y>=x-radius){
            return PointCheckResult.HIT;
        }
        if (x<=0 && y>=0 && y*y + x*x <= radius*radius ){
            return PointCheckResult.HIT;
        }
        if (x<=0 && y<=0 && x>=-radius && y<=radius){
            return PointCheckResult.HIT;
        }

        return PointCheckResult.MISS;
    }

    public float getRadius() {
        return radius;
    }
}
