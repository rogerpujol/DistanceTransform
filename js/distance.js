function DistanceTransform( dataInput, dataOutput)
{
    var n = dataInput.length;

    var k = 0;
    var v = [n];
    var z = [n+1]

    var POSITIVE_INFINITE = 99999999;
    var NEGATIVE_INFINITE = -99999999;

    v[0] = 0;
    z[0] = POSITIVE_INFINITE;
    z[1] = NEGATIVE_INFINITE;

    var s;

    for (var q = 1; q < n; q++)
    {
        while (true)
        {
            s = (((dataInput[q] + q * q) - (dataInput[v[k]] + v[k] * v[k])) / (2.0 * q - 2.0 * v[k]));

            if (s <= z[k])
            {
                k--;
            }
            else
            {
                break;
            }
        }

        k++;

        v[k] = q;
        z[k] = s;
        z[k + 1] = POSITIVE_INFINITE;
    }

    k = 0;

    for (var q = 0; q < n; q++)
    {
        while (z[k + 1] < q)
        {
            k++;
        }

        dataOutput[q] = ((q - v[k]) * (q - v[k]) + dataInput[v[k]]);
    }
}