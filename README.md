# Zero - 折染

![GitHub Repo stars](https://img.shields.io/github/stars/stevending1st/zero?style=social)  ![GitHub](https://img.shields.io/github/license/stevending1st/zero)  ![GitHub last commit](https://img.shields.io/github/last-commit/stevending1st/zero)

[Zero - 折染](https://stevending1st.github.io/zero/) 是一个以折叠和染色为核心的游戏。

## 玩法

折染是一个以折叠和染色为核心的游戏（下面用数值表示颜色深浅，数值越大颜色越深 0 为无色）。折是指以画纸的某一条轴对折，重叠了两个方格按照如下方式重新染色：当两个方格原本都没有颜色，则折叠后两个方格依然没有颜色；其他的情况，两个方格的颜色总和，如果超过阈值则减去阈值；如果不超过阈值则为之前所求的和，特别地，两个方格颜色是阈值，则颜色变成最浅。目前默认阈值是4。

如：重叠两个方格，颜色分别是 0 和 0，染色后依然是 0；重叠两个方格，颜色分别是 4 和 4 则，染色后都是 1；重叠两个方格，颜色分别是 1 和 2，染色后都是 3（1+2）；重叠两个方格，颜色分别是 2 和 3，染色后颜色都是1（2 + 3 - 4）。

通关条件：当<span style="color: red;">红色</span>标记的方格的颜色染成对应值时，则通关。

共有 64 个方格，每一个方格有 4 个着色方案，有 4 关，暗含 1024（64 * 4 * 4）。
