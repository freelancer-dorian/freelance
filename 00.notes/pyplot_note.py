import numpy as np
import matplotlib.pyplot as plt

x = np.arange(0,10,.4)
y = x*x
y2 = np.sqrt(x)
y3 = np.sin(x)

# plt.figure(1)
plt.subplot(221)  
plt.plot(x, y, 'b-',  label='pdf') # plot(x,y, patten)
plt.ylabel('y = x^2')
plt.title('set chart title')
plt.text(5.0, 50, '$\mu=5,\ \sigma=3$')  # text(pos_x, pos_y, "text content"
plt.legend(loc='best', frameon=True)
# plot y2
plt.subplot(222)
plt.plot(x, y2, 'r*', label='cdf')
plt.ylabel('y = sqrt(x)')
plt.legend(loc='best', frameon=False)

# plot y in 3
plt.subplot(223)  
plt.plot(x, y3, 'g^',  label='y') # plot(x,y, patten)
plt.ylabel('y = sin(x)')
plt.vlines(x, 0, y3, colors='g',lw=3, alpha=.5) #vlines(x, y_start, y_end)
plt.legend(loc='best', frameon=False)

# plot y2 in 4
plt.subplot(224)
plt.plot(x, y2, 'ys', label='y2')
plt.ylabel('y = sqrt(x)')
plt.legend(loc='best', frameon=False)

plt.show()
