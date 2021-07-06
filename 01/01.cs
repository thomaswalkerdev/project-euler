using System;
  
public class MultiplesOf3And5 {
  
    // Main Method
    static public void Main()
    {
        Console.WriteLine(Something(10));
    }

    public static int Something(int maxNumber){
        int total = 0;
        for (int i = 0; i < maxNumber; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                total += i;
            }
        }

        return total;
    }
}