from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from tools.tool import search_tool, web_scrapper_tool, github_search_tool, youtube_search_tool, file_writer_tool
from tools.visual_tool import VisualTool
from dotenv import load_dotenv

load_dotenv()


@CrewBase
class ContentWriterResercher():
	"""ContentWriterResercher crew"""

	# Learn more about YAML configuration files here:
	# Agents: https://docs.crewai.com/concepts/agents#yaml-configuration-recommended
	# Tasks: https://docs.crewai.com/concepts/tasks#yaml-configuration-recommended
	agents_config = 'config/agents.yaml'
	tasks_config = 'config/tasks.yaml'

	@agent
	def researcher(self) -> Agent:
		return Agent(
			config=self.agents_config['researcher'],
			verbose=True,
			memory=True,
			tools=[search_tool, web_scrapper_tool, github_search_tool],
			allow_delegation=True
		)

	@agent
	def content_creator(self) -> Agent:
		return Agent(
			config=self.agents_config['content_creator_agent'],
			verbose=True,
			memory=True,
			allow_delegation=True,
			tools=[ youtube_search_tool, search_tool,web_scrapper_tool]
		)

	@agent
	def content_curator(self) -> Agent:
		return Agent(
			config=self.agents_config['content_curator_agent'],
			verbose=True,
			memory=True,
			tools=[],
			allow_delegation=True
		)

	@agent
	def visual_content_creator(self) -> Agent:
		return Agent(
			config=self.agents_config['visual_content_creator_agent'],
			verbose=True,
			memory=True,
			tools=[VisualTool],
			allow_delegation=True
		)

	@agent
	def seo_analyst(self) -> Agent:
		return Agent(
			config=self.agents_config['seo_analyst_agent'],
			verbose=True,
			memory=True,
			tools=[search_tool],
			allow_delegation=True
		)

	@agent
	def editorial_assistant(self) -> Agent:
		return Agent(
			config=self.agents_config['editorial_assistant_agent'],
			verbose=True,
			memory=True,
			tools=[file_writer_tool],
			allow_delegation=false
		)

	# To learn more about structured task outputs, 
	# task dependencies, and task callbacks, check out the documentation:
	# https://docs.crewai.com/concepts/tasks#overview-of-a-task
	@task
	def research_task(self) -> Task:
		return Task(
			config=self.tasks_config['research_task'],
			async_execution=false
		)

	@task
	def content_creator_task(self) -> Task:
		return Task(
			config=self.tasks_config['content_creator_task'],
			async_execution=false
		)
	
	@task
	def visual_content_creator_task(self) -> Task:
		return Task(
			config=self.tasks_config['visual_content_creator_task'],
			async_execution=false
		)

	@task	
	def seo_analyst_task(self) -> Task:
		return Task(
			config=self.tasks_config['seo_analyst_task'],
			async_execution=false
		)
	
	@task
	def editorial_assistant_task(self) -> Task:
		return Task(
			config=self.tasks_config['editorial_assistant_task'],
			async_execution=false,
			output_file='outputs/final_content.md'
		)

	@crew
	def crew(self) -> Crew:
		"""Creates the ContentWriterResercher crew"""
		# To learn how to add knowledge sources to your crew, check out the documentation:
		# https://docs.crewai.com/concepts/knowledge#what-is-knowledge

		return Crew(
			agents=self.agents, # Automatically created by the @agent decorator
			tasks=self.tasks, # Automatically created by the @task decorator
			process=Process.sequential,
			verbose=True,
			# process=Process.hierarchical, # In case you wanna use that instead https://docs.crewai.com/how-to/Hierarchical/
		)
