#!/usr/bin/env python3

import pygame, sys

pygame.init()
pygame.display.set_caption("TicTacToe")


window = pygame.display.set_mode((550, 550))
Color = (255, 210, 210)
window.fill(Color)

sqfirst = pygame.draw.rect(window, (200, 200, 255), (25, 25, 150, 150))
sqsecond = pygame.draw.rect(window, (200, 200, 255), (200, 25, 150, 150))
sqthird = pygame.draw.rect(window, (200, 200, 255), (375, 25, 150, 150))
sqforth = pygame.draw.rect(window, (200, 200, 255), (25, 200, 150, 150))
sqfifth = pygame.draw.rect(window, (200, 200, 255), (200, 200, 150, 150))
sqsixth = pygame.draw.rect(window, (200, 200, 255), (375, 200, 150, 150))
sqseventh = pygame.draw.rect(window, (200, 200, 255), (25, 375, 150, 150))
sqeighth = pygame.draw.rect(window, (200, 200, 255), (200, 375, 150, 150))
sqninth = pygame.draw.rect(window, (200, 200, 255), (375, 375, 150, 150))


run = True
firststep = True
secondstep = True
thirdstep = True
forthstep = True
fifthstep = True
sixthstep = True
seventhstep = True
eighthstep = True
ninthstep = True
objecet = "rect"
while run:
   for event in pygame.event.get():
      if event.type == pygame.QUIT:
        run == False
      if event.type == pygame.KEYDOWN:
         if event.key == pygame.K_SPACE:
            sqfirst = pygame.draw.rect(window, (200, 200, 255), (25, 25, 150, 150))
            sqsecond = pygame.draw.rect(window, (200, 200, 255), (200, 25, 150, 150))
            sqthird = pygame.draw.rect(window, (200, 200, 255), (375, 25, 150, 150))
            sqforth = pygame.draw.rect(window, (200, 200, 255), (25, 200, 150, 150))
            sqfifth = pygame.draw.rect(window, (200, 200, 255), (200, 200, 150, 150))
            sqsixth = pygame.draw.rect(window, (200, 200, 255), (375, 200, 150, 150))
            sqseventh = pygame.draw.rect(window, (200, 200, 255), (25, 375, 150, 150))
            sqeighth = pygame.draw.rect(window, (200, 200, 255), (200, 375, 150, 150))
            sqninth = pygame.draw.rect(window, (200, 200, 255), (375, 375, 150, 150))
            firststep = True
            secondstep = True
            thirdstep = True
            forthstep = True
            fifthstep = True
            sixthstep = True
            seventhstep = True
            eighthstep = True
            ninthstep = True

      if event.type == pygame.MOUSEBUTTONUP:
         postion = pygame.mouse.get_pos()

         if sqfirst.collidepoint(postion) and firststep:
            if objecet == "rect":
               pygame.draw.rect(window, (205, 92, 92), (50, 50, 100, 100))
               objecet = "circle"
            else:
               pygame.draw.circle(window, (253, 254, 254), (100, 100), 50)
               objecet = "rect"
            firststep = False

         if sqsecond.collidepoint(postion)  and secondstep:
            if objecet == "rect":
               pygame.draw.rect(window, (205, 92, 92), (225, 50, 100, 100))
               objecet = "circle"
            else:
               pygame.draw.circle(window, (253, 254, 254), (275, 100), 50)
               objecet = "rect"
            secondstep = False

         if sqthird.collidepoint(postion) and thirdstep:
            if objecet == "rect":
               pygame.draw.rect(window, (205, 92, 92), (400, 50, 100, 100))
               objecet = "circle"
            else:
               pygame.draw.circle(window, (253, 254, 254), (450, 100), 50)
               objecet = "rect"
            thirdstep = False

         if sqforth.collidepoint(postion) and forthstep:
            if objecet == "rect":
               pygame.draw.rect(window, (205, 92, 92), (50, 225, 100, 100))
               objecet = "circle"
            else:
               pygame.draw.circle(window, (253, 254, 254), (100, 275), 50)
               objecet = "rect"
            forthstep = False

         if sqfifth.collidepoint(postion) and fifthstep:
            if objecet == "rect":
               pygame.draw.rect(window, (205, 92, 92), (225, 225, 100, 100))
               objecet = "circle"
            else:
               pygame.draw.circle(window, (253, 254, 254), (275, 275), 50)
               objecet = "rect"
            fifthstep = False

         if sqsixth.collidepoint(postion) and sixthstep:
            if objecet == "rect":
               pygame.draw.rect(window, (205, 92, 92), (400, 225, 100, 100))
               objecet = "circle"
            else:
               pygame.draw.circle(window, (253, 254, 254), (450, 275), 50)
               objecet = "rect"
            sixthstep = False

         if sqseventh.collidepoint(postion) and seventhstep:
            if objecet == "rect":
               pygame.draw.rect(window, (205, 92, 92), (50, 400, 100, 100))
               objecet = "circle"
            else:
               pygame.draw.circle(window, (253, 254, 254), (100, 450), 50)
               objecet = "rect"
            seventhstep = False

         if sqeighth.collidepoint(postion) and eighthstep:
            if objecet == "rect":
               pygame.draw.rect(window, (205, 92, 92), (225, 400, 100, 100))
               objecet = "circle"
            else:
               pygame.draw.circle(window, (253, 254, 254), (275, 450), 50)
               objecet = "rect"
            eighthstep = False

         if sqninth.collidepoint(postion) and ninthstep:
            if objecet == "rect":
               pygame.draw.rect(window, (205, 92, 92), (400, 400, 100, 100))
               objecet = "circle"
            else:
               pygame.draw.circle(window, (253, 254, 254), (450, 450), 50)
               objecet = "rect"
            ninthstep = False

   pygame.display.update()



pygame.quit()