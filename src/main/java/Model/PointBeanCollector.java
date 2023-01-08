package Model;

import java.io.Serializable;
import java.util.ArrayList;


public class PointBeanCollector implements Serializable {
    private ArrayList<PointBean> pointBeans=new ArrayList<>();

    public ArrayList<PointBean> getPointBeans() {
        return pointBeans;
    }
    public boolean add(PointBean pointBean){
        return pointBeans.add(pointBean);
    }
    public void clear(){
        pointBeans.clear();
    }
}
