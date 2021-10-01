SELECT
	`Interview`.*,
	`Application->Messages`.`id` AS `Application.Messages.id`,
	`Application->Messages`.`content` AS `Application.Messages.content`,
	`Application->Messages`.`applicationId` AS `Application.Messages.applicationId`,
	`Application->Messages`.`senderId` AS `Application.Messages.senderId`,
	`Application->Messages`.`receiverId` AS `Application.Messages.receiverId`,
	`Application->Messages`.`createdAt` AS `Application.Messages.createdAt`,
	`Application->Messages`.`updatedAt` AS `Application.Messages.updatedAt` 
FROM
	(
	SELECT
		`Interview`.`id`,
		`Interview`.`interviewAt`,
		`Interview`.`address`,
		`Interview`.`tip`,
		`Interview`.`applicationId`,
		`Interview`.`createdAt`,
		`Interview`.`updatedAt`,
		`Application`.`id` AS `Application.id`,
		`Application`.`userId` AS `Application.userId`,
		`Application`.`jobId` AS `Application.jobId`,
		`Application`.`resumeId` AS `Application.resumeId`,
		`Application`.`readAt` AS `Application.readAt`,
		`Application`.`handledStatus` AS `Application.handledStatus`,
		`Application`.`createdAt` AS `Application.createdAt`,
		`Application`.`updatedAt` AS `Application.updatedAt`,
		`Application->Job`.`id` AS `Application.Job.id`,
		`Application->Job`.`name` AS `Application.Job.name`,
		`Application->Job`.`type` AS `Application.Job.type`,
		`Application->Job`.`recruitingNnumbers` AS `Application.Job.recruitingNnumbers`,
		`Application->Job`.`salary` AS `Application.Job.salary`,
		`Application->Job`.`workLocation` AS `Application.Job.workLocation`,
		`Application->Job`.`workExperience` AS `Application.Job.workExperience`,
		`Application->Job`.`educationBackground` AS `Application.Job.educationBackground`,
		`Application->Job`.`description` AS `Application.Job.description`,
		`Application->Job`.`skill` AS `Application.Job.skill`,
		`Application->Job`.`companyId` AS `Application.Job.companyId`,
		`Application->Job`.`status` AS `Application.Job.status`,
		`Application->Job`.`createdAt` AS `Application.Job.createdAt`,
		`Application->Job`.`updatedAt` AS `Application.Job.updatedAt`,
		`Application->Job->Company`.`id` AS `Application.Job.Company.id`,
		`Application->Job->Company`.`name` AS `Application.Job.Company.name`,
		`Application->Job->Company`.`type` AS `Application.Job.Company.type`,
		`Application->Job->Company`.`imageUrl` AS `Application.Job.Company.imageUrl`,
		`Application->Job->Company`.`address` AS `Application.Job.Company.address`,
		`Application->Job->Company`.`financingStage` AS `Application.Job.Company.financingStage`,
		`Application->Job->Company`.`introduction` AS `Application.Job.Company.introduction`,
		`Application->Job->Company`.`scale` AS `Application.Job.Company.scale`,
		`Application->Job->Company`.`legalRepresentative` AS `Application.Job.Company.legalRepresentative`,
		`Application->Job->Company`.`registeredCapital` AS `Application.Job.Company.registeredCapital`,
		`Application->Job->Company`.`registeredAt` AS `Application.Job.Company.registeredAt`,
		`Application->Job->Company`.`createdAt` AS `Application.Job.Company.createdAt`,
		`Application->Job->Company`.`updatedAt` AS `Application.Job.Company.updatedAt`,
		`Application->User`.`id` AS `Application.User.id`,
		`Application->User`.`username` AS `Application.User.username`,
		`Application->User`.`realName` AS `Application.User.realName`,
		`Application->User`.`type` AS `Application.User.type`,
		`Application->User`.`imageUrl` AS `Application.User.imageUrl`,
		`Application->User`.`sex` AS `Application.User.sex`,
		`Application->User`.`birthday` AS `Application.User.birthday`,
		`Application->User`.`phoneNumber` AS `Application.User.phoneNumber`,
		`Application->User`.`email` AS `Application.User.email`,
		`Application->User`.`password` AS `Application.User.password`,
		`Application->User`.`solt` AS `Application.User.solt`,
		`Application->User`.`createdAt` AS `Application.User.createdAt`,
		`Application->User`.`updatedAt` AS `Application.User.updatedAt` 
	FROM
		`Interviews` AS `Interview`
		LEFT OUTER JOIN (
			`Applications` AS `Application`
			INNER JOIN `Jobs` AS `Application->Job` ON `Application`.`jobId` = `Application->Job`.`id` 
			AND `Application->Job`.`name` LIKE '%s%'
			INNER JOIN `Companies` AS `Application->Job->Company` ON `Application->Job`.`companyId` = `Application->Job->Company`.`id`
			INNER JOIN `Users` AS `Application->User` ON `Application`.`userId` = `Application->User`.`id` 
		) ON `Interview`.`applicationId` = `Application`.`id` 
	ORDER BY
		`Interview`.`createdAt` DESC 
		LIMIT 0,
		10 
	) AS `Interview`
	LEFT OUTER JOIN `Messages` AS `Application->Messages` ON `Application.id` = `Application->Messages`.`applicationId` 
ORDER BY
	`Interview`.`createdAt` DESC;