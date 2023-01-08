package Model;

public enum PointCheckResult {
    HIT(true),
    MISS(false);
    private final boolean checkHit;

    PointCheckResult(boolean checkHit) {
        this.checkHit = checkHit;
    }

    public boolean isHit() {
        return checkHit;
    }
}
